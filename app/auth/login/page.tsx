"use client";
import { useAppDispatch } from "@/store/hooks";
import { setIsAuth, setUser, setUserToken } from "@/store/reducers";
import { Button, TextInput } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(`http://localhost:8000/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${email}&password=${password}`,
    })
      .then((res) => {
        if (res.ok) {
          const response = res.json();
          response.then((data) => {
            dispatch(setUserToken(data.access_token));
            dispatch(
              setUser({
                id: data.user_id,
                username: data.username,
                role: data.role,
              })
            );
            dispatch(setIsAuth());
            if (data.role === "hr_lead") router.push("/platform/dashboard");
            else router.push("/platform/lk");
          });
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium mb-2">Вход в PRO BOARD</h1>
      <p className="text-light-text mb-10">
        Введите логин и пароль чтобы войти
      </p>
      <form>
        <TextInput
          type="text"
          placeholder="Логин"
          value={email}
          onValueChange={setEmail}
          className="w-80 mb-2"
        />
        <TextInput
          type="password"
          placeholder="Пароль"
          value={password}
          onValueChange={setPassword}
        />
        <Button
          onClick={(e) => handleSubmit(e)}
          loading={isLoading}
          className="mt-6 w-80"
          color="blue"
          size="xl"
        >
          Войти
        </Button>
      </form>
    </div>
  );
};

export default page;
