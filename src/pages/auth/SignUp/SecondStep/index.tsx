import { TextField, Checkbox } from 'components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/structure/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import routes from 'constants/routes';
import { User, useSignUp } from 'contexts/SignUp';
import { useState } from 'react';
import * as Yup from 'yup';
import { useCreateUser } from 'useCases/SignUp';
import * as S from './SecondStep.styles';

const schemaValidate = Yup.object().shape({
  instrument: Yup.string().required('Nome obrigatorio'),
  band: Yup.string().required('Senha obrigatorio'),
});

export const SecondStep = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schemaValidate),
  });
  const [isChecked, setIsChecked] = useState(false);
  const handleCreateUser = useCreateUser();
  const { user, setUser } = useSignUp();

  const onSubmit = (payload: User) => {
    handleCreateUser!({
      ...user,
      ...payload,
    });
  };

  const handleAddUserMusic = ({ band, instrument }: User) => {
    setUser({
      band,
      instrument,
    });
    setIsChecked(prevState => !prevState);
  };

  if (isChecked) {
    return <Navigate to="/sign-up/third-step" />;
  }
  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>Dados musicais</S.Label>

        <TextField
          register={register}
          name="instrument"
          label="Instrumento"
          placeholder="Instrumento"
        />
        <TextField
          register={register}
          name="band"
          label="Banda"
          placeholder="Banda"
        />
        <Checkbox
          checked={isChecked}
          handleCheck={handleSubmit(handleAddUserMusic)}
          name="hasMusic"
          label="Tem músicas próprias?"
        />

        <Button type="submit">FINALIZAR</Button>
      </S.Form>

      <S.HasAccount>
        <Link to={routes.signIn.base}>
          <FiArrowLeft color="#DEDEEA" size={22} />
          Voltar
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
