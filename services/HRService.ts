import { Employee } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface EmployeeDTO {
  worker_id: string;
  username: string;
  name: string;
  surname: string;
  job_title: string;
}

export const HRApi = createApi({
  reducerPath: "HRApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["HR"],
  endpoints: (builder) => ({
    getWorkers: builder.query<Employee[], void>({
      query: () => ({
        url: "/hr_lead/get_maintaining_workers",
      }),
      transformResponse: (employees: EmployeeDTO[], meta) => {
        return employees.map((employee) => {
          return {
            workerId: employee.worker_id,
            username: employee.username,
            name: employee.name,
            surname: employee.surname,
            jobTitle: employee.job_title,
          };
        });
      },
      providesTags: ["HR"],
    }),
  }),
});

export const { useGetWorkersQuery } = HRApi;
