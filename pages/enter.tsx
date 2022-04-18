import Container from '@mui/material/Container';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormControl } from '@mui/material';

const Enter = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  return(<Container>
        <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
      <FormControl>
          <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      </FormControl>
      <FormControl>
          <input type="password" placeholder="Senha" {...register("Senha", {required: true, max: 12, min: 8, maxLength: 12})} />
      </FormControl>
          <input type="password" placeholder="Repetir Senha" {...register("Repetir Senha", {required: true, max: 12, min: 8, maxLength: 16})} />
          <input type="submit"/>
        </form>
  </Container>)
}

export default Enter;