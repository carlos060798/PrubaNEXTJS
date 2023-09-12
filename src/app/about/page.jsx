import React from "react";
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaServer, FaCode, FaGit } from "react-icons/fa";
import { FaBook, FaDumbbell, FaMusic } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-8">
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:row-span-2">
              <div className="bg-blue-500 text-white p-8 rounded-lg mb-8">
                <h1 className="text-4xl font-bold mb-4">
                  ¡Hola, soy [Tu Nombre]!
                </h1>
                <p className="text-lg mb-4">
                  ¡Bienvenido a mi mundo digital! Soy un apasionado
                  desarrollador web en busca de nuevos desafíos.
                </p>
              </div>
            </div>
            <div>
              {/* Aquí puedes agregar el video en tamaño pequeño */}
              <p>Video pequeño</p>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Mis Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaReact className="w-12 h-12 text-blue-500" />
              <span className="ml-2">React.js</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaNodeJs className="w-12 h-12 text-green-500" />
              <span className="ml-2">Node.js</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaJs className="w-12 h-12 text-yellow-500" />
              <span className="ml-2">JavaScript</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaDatabase className="w-12 h-12 text-purple-500" />
              <span className="ml-2">MySQL</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaServer className="w-12 h-12 text-red-500" />
              <span className="ml-2">PostgreSQL</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaGit className="w-12 h-12 text-gray-500" />
              <span className="ml-2">Git</span>
            </div>
            {/* Puedes agregar más tarjetas de habilidades aquí */}
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Mis Hobbies</h2>
          <div className="flex flex-wrap gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaBook className="w-12 h-12 text-blue-500" />
              <span className="ml-2">Lectura</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaDumbbell className="w-12 h-12 text-green-500" />
              <span className="ml-2">Ejercicio</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaMusic className="w-12 h-12 text-yellow-500" />
              <span className="ml-2">Música</span>
            </div>
            {/* Puedes agregar más tarjetas de hobbies aquí */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;