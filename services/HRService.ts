import { Employee } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface EmployeeDTO {
  worker_id: Number;
  username: string;
  name: string;
  surname: string;
  job_title: string;
}

interface AddEmployee {
  username: string;
  name: string;
  surname: string;
  jobTitle: string;
  password: string;
}

interface LinkEmployee {
  workerUsername: string;
  hrLeadUsername: string;
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
            workerId: Number(employee.worker_id),
            username: employee.username,
            name: employee.name,
            surname: employee.surname,
            jobTitle: employee.job_title,
          };
        });
      },
      providesTags: ["HR"],
    }),
    setWorker: builder.mutation<void, AddEmployee>({
      query: (employee) => ({
        url: "/workers",
        method: "POST",
        body: {
          username: employee.username,
          name: employee.name,
          surname: employee.surname,
          job_title: employee.jobTitle,
          password: employee.password,
        },
      }),
      invalidatesTags: ["HR"],
    }),
    linkWorker: builder.mutation<void, LinkEmployee>({
      query: (data) => ({
        url: "/worker/change_hr_lead",
        method: "POST",
        body: {
          worker_username: data.workerUsername,
          hr_lead_username: data.hrLeadUsername,
        },
      }),
      invalidatesTags: ["HR"],
    }),
  }),
});

export const {
  useGetWorkersQuery,
  useSetWorkerMutation,
  useLinkWorkerMutation,
} = HRApi;
