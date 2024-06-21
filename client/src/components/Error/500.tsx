const Error500: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-32">
      <h1 className="text-4xl text-white font-bold">Uh Oh!</h1>
      <div className="text-2xl text-white">There was a problem fetching your request.</div>
    </div>
  );
}

export { Error500 };