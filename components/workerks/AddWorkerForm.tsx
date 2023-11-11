"use client";
import { UserModel } from "@/models";
import {
  useLinkWorkerMutation,
  useSetWorkerMutation,
} from "@/services/HRService";
import { Dialog, Transition } from "@headlessui/react";
import { Button, Card, TextInput } from "@tremor/react";
import React, { Fragment, useState } from "react";

interface AddWorkerFormProps {
  isOpen: boolean;
  closeModal: () => void;
  hr: Partial<UserModel>;
}

export const AddWorkerForm: React.FC<AddWorkerFormProps> = ({
  isOpen,
  closeModal,
  hr,
}) => {
  const [setWorkerMutation, result] = useSetWorkerMutation();
  const [linkWorkerMutation, linkResult] = useLinkWorkerMutation();

  const [worker, setWorker] = useState({
    name: "",
    surname: "",
    jobTitle: "",
    username: "",
    password: "",
  });

  const addWorker = async () => {
    await setWorkerMutation(worker);
    await linkWorkerMutation({
      workerUsername: worker.username,
      hrLeadUsername: hr.username || "parzival_eugene",
    });

    setWorker({
      name: "",
      surname: "",
      jobTitle: "",
      username: "",
      password: "",
    });
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="absolute inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>
        <div className="grid items-center justify-center h-screen">
          <Card>
            <h1>Добавление сотрудника</h1>
            <p className="text-sm text-light-text">
              Заполните информацию о сотруднике, чтобы добавить его в систему
            </p>

            <p className="mt-6 mb-2">Личные данные</p>
            <TextInput
              placeholder="Имя"
              className="w-full mb-2"
              value={worker.name}
              onChange={(e) => setWorker({ ...worker, name: e.target.value })}
            />
            <TextInput
              placeholder="Фамилия"
              className="w-full"
              value={worker.surname}
              onChange={(e) =>
                setWorker({ ...worker, surname: e.target.value })
              }
            />

            <p className="mt-4 mb-2">Должность</p>
            <TextInput
              placeholder="Должность"
              className="w-full"
              value={worker.jobTitle}
              onChange={(e) =>
                setWorker({ ...worker, jobTitle: e.target.value })
              }
            />

            <p className="mt-4 mb-2">Данные для входа</p>
            <TextInput
              placeholder="Логин"
              className="w-full mb-2"
              value={worker.username}
              onChange={(e) =>
                setWorker({ ...worker, username: e.target.value })
              }
            />
            <TextInput
              placeholder="Пароль"
              type="password"
              className="w-full"
              value={worker.password}
              onChange={(e) =>
                setWorker({ ...worker, password: e.target.value })
              }
            />

            <div className="grid grid-cols-2 gap-6 mt-6">
              <Button
                color="blue"
                variant="secondary"
                onClick={closeModal}
                size="xl"
              >
                Отмена
              </Button>
              <Button color="blue" size="xl" onClick={addWorker}>
                Добавить сотрудника
              </Button>
            </div>
          </Card>
        </div>
      </Dialog>
    </Transition>
  );
};
