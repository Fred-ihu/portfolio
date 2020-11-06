import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10">
      <div className="grid lg:grid-cols-2 gap-10 mx-10">
        <div className="bg-green-300">
          <h1 className="text-4xl">Développeur web.</h1>
          <h1 className="text-4xl mont-bold">Développeur web</h1>
        </div>
        <div className="bg-green-400">col a 2</div>
      </div>
    </div>
  );
}
