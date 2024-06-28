const Error500: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-32">
      <h1 className="text-4xl text-light font-bold">Uh Oh!</h1>
      <div className="text-2xl text-light">There was a problem fetching your request.</div>
    </div>
  );
}

export { Error500 };