// components/form.tsx
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from 'react-toastify';
import { Input } from "@/components/ui/input";
import { useState, Suspense } from "react";
import { PhoneInput } from "./ui/phone-input";
import { register } from "@/actions/register.action";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from 'next/navigation'; // Importando useRouter de next/navigation
import 'react-international-phone/style.css';
import { MultiStepLoader } from "@/components/ui/multi-step-loader"; // Ajuste o caminho para o seu loader

function FormComponent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    userAgent: '',
    eventType: 'new_lead',
    eventIdentifier: 'black_november_blues_ptbr',
    originUrl: '',
    queryParams: {},
    mobilePhone: ''
  });

  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormData(prev => ({
      ...prev,
      mobilePhone: phone
    }));

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    formDataObj.append('mobile_phone', phone);

    setLoading(true); // Inicia o loader

    const response = await register(formDataObj);

    if (response.success) {
      toast.success('Cadastro realizado com sucesso!', {
        theme: 'dark'
      });

      // Redireciona após um pequeno atraso
      setTimeout(() => {
        // setLoading(false); // Para o loader antes de redirecionar
        router.push(process.env.NEXT_PUBLIC_WPP_GROUP_URL || '/');
      }, 2000); // 2 segundos de atraso para mostrar a mensagem de sucesso

      // Reseta os campos do formulário após o sucesso
      setFormData({
        fullName: '',
        email: '',
        userAgent: '',
        eventType: 'new_lead',
        eventIdentifier: 'black_november_blues_ptbr',
        originUrl: '',
        queryParams: {},
        mobilePhone: ''
      });
      setPhone('');
    } else {
      setLoading(false); // Para o loader em caso de erro
      router.push(process.env.NEXT_PUBLIC_WPP_GROUP_URL || '/');
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
      
      {/* Exibir loader enquanto está carregando */}
      {loading && (
        <div className="mt-4 w-full flex justify-center">
          <MultiStepLoader loadingStates={[
            { text: "Procurando o melhor grupo para você..." },
            { text: "Redirecionando para o Grupo Vip!" },
          ]} loading={loading} duration={2000} />
        </div>
      )}

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
