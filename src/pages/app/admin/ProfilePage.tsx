import api from "@/axiosconfig";
import Address from "@/components/app/profile/Address";
import Subscription from "@/components/app/profile/Subscription";
import { Button } from "@/components/ui/button";
import { decodeJwt } from "jose";
import { PenBox, SchoolIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface InstitutionData {
  data: {
    institution: {
      id: number,
      razao_social: string,
      nome_fantasia: string,
      cnpj: string,
      end_logradouro: string,
      end_cidade: string,
      end_uf: string,
      end_cep: string,
    },
    subscription: {
      id: number,
      plano: string,
      current_period_end: string,
      status: string,
      value: number,
    }
  }
}

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState<InstitutionData>({
    data: {
      institution: {
        id: 0,
        razao_social: '',
        nome_fantasia: '',
        cnpj: '00000000000000',
        end_logradouro: '',
        end_cidade: '',
        end_uf: '',
        end_cep: '',
      },
      subscription: {
        id: 0,
        plano: '',
        current_period_end: '',
        status: '',
        value: 0,
      },
    }
  });


  useEffect(() => {
    const fetchData = async () => {
      const token = decodeJwt(localStorage.getItem('authToken')?.split(' ')[1] || '');
      const tokenData = token as { data: { institutionId: number } };
      console.log(tokenData.data.institutionId);

      const resp = await api.get(`/institutions/getInstitutionDetails?id=${tokenData.data.institutionId}`);
      setData(resp.data);
      setLoading(false);
    };

    if (fetching) {
      fetchData();
      setFetching(false);
    }
  }, [fetching]);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {loading ? (
        <div className="flex align-middle justify-center w-full h-[70vh] group md:grid-cols-3 gap-6 md:gap-12 mt-12">
          <div role="status" className="m-auto">
            <svg
              aria-hidden="true"
              className="w-[7rem] h-[7rem] text-gray-200 animate-spin dark:text-gray-600 fill-primary"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Carregando...</span>
          </div>
        </div>
      ) : (
        <div className="w-full dark:bg-zinc-900 bg-zinc-50 justify-center flex flex-col gap-5">
          <img
            className="h-[10rem] w-full object-cover"
            src="/images/success-classroom.jpg"
            alt=""
          />
          <div className="absolute top-[20%] lg:ml-[5rem] md:ml-[3rem] sm:ml-[2rem] m-5 p-5 bg-primary rounded-full border-zinc-50 dark:border-zinc-900 border-[.5rem]">
            <SchoolIcon className="h-[7rem] w-[7rem] text-zinc-50" />
          </div>
          <div className="container-lg flex flex-col lg:flex-row justify-between">
            <div className="ml-[13rem] md:ml-[15rem] lg:ml-[17rem] mt-3 pr-3">
              <h1 className="dark:text-zinc-50 font-bold text-2xl md:text-4xl lg:text-4xl">
                {data.data.institution.nome_fantasia}
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                {data.data.institution.razao_social}
              </p>
              <small className="text-zinc-500 dark:text-zinc-400">
                {(data.data.institution.cnpj).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")}
              </small>
            </div>
            <div className="m-auto w-full lg:w-fit px-10 pt-3">
              <NavLink to={`/instituicao/perfil/editar?id=${data.data.institution.id}`}>
                <Button className="w-full flex flex-row gap-3">
                  <PenBox width={20} />
                  <p>Editar perfil</p>
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="container justify-center mt-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-around flex-wrap">
              <Subscription 
                planoId={data.data.subscription.id}
                plano={data.data.subscription.plano}
                proximoPagamento={data.data.subscription.current_period_end}
                valor={data.data.subscription.value.toString()}
              />
              <Address 
                logradouro={data.data.institution.end_logradouro}
                cidade={data.data.institution.end_cidade}
                uf={data.data.institution.end_uf}
                cep={data.data.institution.end_cep?.replace(/(\d{5})(\d{3})/, "$1-$2") || ''}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
