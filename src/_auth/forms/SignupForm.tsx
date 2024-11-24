import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Input,
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";

import { signUpValidations } from "@/lib/Validations";
import { signUpFormField } from "@/lib/Constants";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const form = useForm<z.infer<typeof signUpValidations>>({
    resolver: zodResolver(signUpValidations),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {};

  const renderSignUpFormFields = () => {
    return signUpFormField.map((fieldData: any) => {
      return (
        <FormField
          key={fieldData.id}
          control={form.control}
          name={fieldData.fieldName}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{fieldData.label}</FormLabel>
              <FormControl>
                <Input
                  className="shad-input"
                  type={fieldData.type}
                  placeholder={fieldData.placeholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    });
  };

  return (
    <Form {...form}>
      <div className="sm:w:420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="snapgramLogo" />
        <h2 className="h3-bold sm:h2-bold md:h2-bold sm:pt-5">
          Create a new account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use Snapgram, please enter your details
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          {renderSignUpFormFields()}
          <Button className="shad-button_primary w-full" type="submit">
            Submit
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link
              to="/sign-in"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
