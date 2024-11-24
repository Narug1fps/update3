import React from "react";

export default function forms() {
  return (
    <div className="justify-center mt-5 flex ">
      <div className="w-[50vh] h-[90vh]  rounded-lg   bg-white">
        <form className="border-2 border-black" action="" method="post">
          <input
            className="bg-black bg-opacity-0 relative block w-72 px-3 py-2 border-b border-black placeholder-black text-black focus:outline-none focus:ring-indigo-500 duration-500 focus:border-indigo-500 focus:z-10 sm:text-sm m-4 "
            type="text"
            name="Titulo"
            id="Text"
            required
            placeholder="text"
          />
          <input type="image" src="" name="Image" alt="" />
          <input type="text" name="Autor/Atualizado" id="" />
          <input type="text" name="Link" id="" />
          <input type="text" name="Titulo" id="" />
          <input type="text" name="Conteudo" id="" />
        </form>
      </div>
    </div>
  );
}
