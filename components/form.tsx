import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from 'react-toastify';
import { Input } from "@/components/ui/input";
import { useState, useEffect, Suspense } from "react";
import { PhoneInput } from "./ui/phone-input";
import { register } from "@/actions/register.action";
import { useSearchParams } from 'next/navigation';
import { FaWhatsapp } from "react-icons/fa";
import 'react-international-phone/style.css';

function FormComponent() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    userAgent: '',
    eventType: 'new_lead',
    eventIdentifier: 'maratona_black_ptbr',
    originUrl: '',
    queryParams: {}
  });
  const [phone, setPhone] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const originUrl = window.location.href;

    const queryParamsObj: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      queryParamsObj[key] = value;
    });

    setFormData(prev => ({
      ...prev,
      userAgent: userAgent,
      originUrl: originUrl,
      queryParams: queryParamsObj
    }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formDataObj = new FormData(form);
    formDataObj.append('phone', phone);

    const response = await register(formDataObj);

    if (response.success) {
      toast.success('Cadastro realizado com sucesso!', {
        theme: 'dark'
      });
      setFormData({ fullName: '', email: '', phone: '', userAgent: '', eventType: '', eventIdentifier: '', originUrl: '', queryParams: {} });
    } else {
      toast.error(`Erro durante o cadastro: ${response.error}`, {
        theme: 'dark'
      });
    }
  };

  return (
    <div className="flex justify-center items-center text-white p-4">
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
