import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-row items-center h-full">
      <div className="flex flex-col items-center w-full">
        <Image src="/images/NotFound.svg" alt="Not Found" width={326} height={226} />
        <h2>Мы не можем найти такую страницу</h2>
        <p>
          Но у нас есть много других. Попробуйте обновить страницу
          или воспользуйтесь поиском по сервису.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
