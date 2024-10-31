export default function Title({ name }: { name: string }) {
  return (
    <h1 className="animate__animated animate__backInDown text-9xl font-bold text-primary">
      {name}
    </h1>
  );
}
