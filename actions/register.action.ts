"use server";

export async function register(formData: FormData) {
  try {
    // Obtém os dados do formData
    const fullNameEntry = formData.get('fullName');
    const fullName = typeof fullNameEntry === 'string' ? fullNameEntry : ''; // Garante que seja uma string
    const userAgent = formData.get('userAgent') || '';
    const eventType = 'new-lead'; // Extrai eventType
    const eventIdentifier = formData.get('eventIdentifier') || ''; // Extrai eventIdentifier
    const originUrl = formData.get('originUrl') || ''; // Extrai originUrl
    const email = formData.get('email') || ''; // Extrai email
    const mobilePhone = formData.get('mobilePhone') || ''; // Extrai mobilePhone
    const username = formData.get('username') || ''; // Extrai username

    // Monta o documento que será inserido no MongoDB
    const document = {
      event_type: eventType,
      event_identifier: eventIdentifier,
      full_name: fullName,
      email: email,
      mobile_phone: mobilePhone,
      username: username,
      userAgent: userAgent,
      originUrl: originUrl
    };

    // Faz a requisição à API do MongoDB para inserir o documento
    const response = await fetch('https://sa-east-1.aws.data.mongodb-api.com/app/data-giwjuic/endpoint/data/v1/action/insertOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': '5b1bkQ59vfgOaayTSkY4DkzSldgxNO49ttGASBmBZrjBXJKIXJcczWhUXWdAKqNn',
      },
      body: JSON.stringify({
        collection: 'lead-events',
        database: 'test',
        dataSource: 'Cluster0',
        document: document,
      }),
    });

    // Verifica a resposta
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Erro ao inserir no MongoDB: ${errorData.message || response.statusText}`);
    }

    const responseData = await response.json();
    return {
      success: true,
      data: responseData,
    };

  } catch (error) {
    // Verifica se error é uma instância de Error
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    } else {
      return {
        success: false,
        error: 'Erro desconhecido',
      };
    }
  }
}
