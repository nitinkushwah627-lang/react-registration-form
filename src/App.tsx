import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./App.css";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Enter a valid email"),

  password: z.string().min(6, "Password must be at least 6 characters"),

  gender: z.string().min(1, "Please select gender"),

  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms",
  }),

  profileImage: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, {
      message: "Please select a profile image",
    }),
});

type FormData = z.infer<typeof formSchema>;

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register("name")}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender")}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p>{errors.gender.message}</p>}

        <label>
          <input
            type="checkbox"
            {...register("terms")}
          />
          I agree to Terms
        </label>
        {errors.terms && <p>{errors.terms.message}</p>}

        <label htmlFor="profileImage">Profile Image</label>
        <input
          id="profileImage"
          type="file"
          accept="image/*"
          {...register("profileImage")}
        />
        {errors.profileImage && (
          <p>{errors.profileImage.message}</p>
        )}

        <button type="submit">Register</button>

        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default App;