import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from 'react-toastify';
import { Input } from "@/components/ui/input";
import { useState, useEffect, Suspense } from "react";
import { PhoneInput } from "./ui/phone-input";
import { register } from "@/actions/register.action";
import { useSearchParams } from 'next/navigation';
import { FaWhatsapp } from "react-icons/fa";
import 'react-international-phone/style.css';
import ReactPixel from "react-facebook-pixel";

function FormComponent() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    userAgent: '',
    eventType: 'new_lead',
    eventIdentifier: 'maratona_black_ptbr',
    originUrl: '',
    queryParams: {},
    mobilePhone: '' // Adicionado o campo mobilePhone no estado
  });

  const [phone, setPhone] = useState('');
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false); // Verifica se está no cliente

  useEffect(() => {
    setIsClient(true);

    if (isClient) {
      const userAgent = navigator.userAgent;
      const originUrl = window.location.href;

      const queryParamsObj: { [key: string]: string } = {};
      searchParams.forEach((value, key) => {
        queryParamsObj[key] = value;
      });

      console.log("User agent:", userAgent);
      console.log("Origin URL:", originUrl);
      console.log("Query Params:", queryParamsObj);

      setFormData(prev => ({
        ...prev,
        userAgent,
        originUrl,
        queryParams: queryParamsObj
      }));
    }
  }, [searchParams, isClient]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(`Updated form field: ${e.target.name}, value: ${e.target.value}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Atualiza o campo mobilePhone com o número do telefone
    setFormData((prev) => ({
      ...prev,
      mobilePhone: phone
    }));

    console.log("Final form data before submit:", formData);
    console.log("Phone number:", phone);

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    formDataObj.append('mobile_phone', phone); // Adiciona o número do telefone ao FormData

    console.log("FormData object for submission:", Array.from(formDataObj.entries()));

    const response = await register(formDataObj);

    if (response.success) {
      ReactPixel.track('Lead', {
        content_name: 'Cadastro Lead - Maratona Black',
        value: 0,
        currency: 'BRL'
      });

      toast.success('Cadastro realizado com sucesso!', {
        theme: 'dark'
      });

      setFormData({
        fullName: '',
        email: '',
        userAgent: '',
        eventType: 'new_lead',
        eventIdentifier: 'maratona_black_ptbr',
        originUrl: '',
        queryParams: {},
        mobilePhone: '' // Reset mobilePhone
      });
      setPhone('');
      window.location.href = process.env.NEXT_PUBLIC_WPP_GROUP_URL || ''; // Redireciona para o grupo do WhatsApp
    } else {
      console.error("Error during registration:", response.error);
      toast.error(`Erro durante o cadastro: ${response.error}`, {
        theme: 'dark'
      });
    }
  };

  return (
    <div className="flex justify-center items-center text-white p-4 pt-0">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 h-14 text-lg"
        />
        <PhoneInput
          defaultCountry={"BR"}
          value={phone}
          onChange={(phone) => setPhone(phone || '')}
          placeholder="Insira seu WhatsApp"
          required
        />
        <input type="hidden" name="eventType" value={formData.eventType} />
        <input type="hidden" name="eventIdentifier" value={formData.eventIdentifier} />
        <input type="hidden" name="userAgent" value={formData.userAgent} />
        <input type="hidden" name="originUrl" value={formData.originUrl} />
        <input type="hidden" name="mobilePhone" value={formData.mobilePhone} />
        {Object.entries(formData.queryParams).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value as string} />
        ))}
        <Button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white h-14 text-lg font-bold uppercase"
        >
          <FaWhatsapp className="mr-2" />
          Entrar no grupo VIP!
        </Button>
      </form>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default function Form() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormComponent />
    </Suspense>
  );
}
