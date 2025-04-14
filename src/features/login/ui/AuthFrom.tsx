import { Button, Input, Label } from "@/shared/ui";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../model";

interface AuthFormData {
  email: string;
  password: string;
}
export const AuthFrom = () => {
  const { control, handleSubmit } = useForm<AuthFormData>();
  const { loginUser, isLoading } = useLogin();

  const onSubmit = (formData: AuthFormData) => {
    const { email, password } = formData;
    loginUser(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-sm w-full mx-auto"
    >
      <div>
        <Label htmlFor="email">Email</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input id={field.name} disabled={isLoading} {...field} />
          )}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              id={field.name}
              type="password"
              disabled={isLoading}
              {...field}
            />
          )}
        />
      </div>
      <Button disabled={isLoading} type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};
