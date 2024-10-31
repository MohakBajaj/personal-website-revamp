export default function Title({ name }: { name: string }) {
  return (
    <h1 className="animate__animated animate__backInDown text-center text-5xl font-bold text-primary sm:text-7xl md:text-8xl lg:text-9xl">
      {name}
    </h1>
  );
}
