const Error404: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-32">
      <h1 className="text-4xl text-white font-bold">Uh Oh!</h1>
      <div className="text-2xl text-white">The content you are looking for could not be found.</div>
    </div>
  );
}

export { Error404 };