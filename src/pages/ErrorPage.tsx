import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    // این هوک ارور رو برمیگردونه
  const error = useRouteError();

  //  برای بررسی اینکه در محیط توسعه هست برنامم یا نه که اگر توی فاز توسعه باشه فالس برمیگردونه 
  const prod = import.meta.env.PROD;

  return (
    <div>
      <main className="p-5">
        <h1>ای واای ...</h1>
        {/* و هوک پایینی نوع ارور رو برمیگردونه */}
        {isRouteErrorResponse(error)
          ? "درخواست شما یافت نشد"
          : prod
          ? "یکی پاش خورده به سیم قطع شده دوباره امتحان کن"
          : (error as Error).message}
      </main>
    </div>
  );
};

export default ErrorPage;
