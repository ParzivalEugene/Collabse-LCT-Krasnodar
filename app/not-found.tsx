import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-row items-center flex-1">
      <div className="flex flex-col items-center w-full p-6 mt-20">
        <div className="flex flex-col items-start">
          <Image
            src="/images/NotFound.svg"
            alt="Not Found"
            width={326}
            height={226}
          />
          <h2 className="mt-6 font-medium">Мы не можем найти такую страницу</h2>
          <p className="max-w-[440px] mt-1">
            Но у нас есть много других. Попробуйте обновить страницу
            или воспользуйтесь поиском по сервису.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
