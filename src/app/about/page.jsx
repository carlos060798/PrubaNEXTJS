import React from "react";
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaServer, FaGit } from "react-icons/fa";
import { FaBook, FaDumbbell, FaMusic } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-8">
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="md:row-span-2">
              <div className="bg-blue-500 text-white p-8 rounded-lg mb-8">
                <h1 className="text-4xl font-bold text-center mb-4">
                  ¡Hola, soy [Tu Nombre]!
                </h1>
                <p className="text-lg text-center mb-4">
                  ¡Bienvenido a mi mundo digital! Soy un apasionado
                  desarrollador web en busca de nuevos desafíos.
                </p>
              </div>
            </div>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/l6Wjrf4EyIo?si=9gIfoJzmtFZ3inkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-blue-500">
            Mis Habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <FaReact className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">React.js</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <FaNodeJs className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Node.js</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <FaJs className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">JavaScript</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <FaServer className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Mysql</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <FaDatabase className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Mongo</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <FaGit className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Git</span>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-blue-500">
            Mis Hobbies
          </h2>
          <div className="flex justify-center flex-wrap gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <FaBook className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Lectura</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <FaDumbbell className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Ejercicio</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <FaMusic className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Música</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
