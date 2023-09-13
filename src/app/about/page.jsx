import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaServer,
  FaGit,
} from "react-icons/fa";
import { FaBook, FaDumbbell, FaMusic } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-8">
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="md:row-span-2 bg-blue-500 text-white p-8 rounded-lg mb-8 description-container">
              <h1 className="text-4xl font-bold text-center mb-4">
                ¡Hola, soy [Carlos]!
              </h1>
              <p className="text-lg text-justify mb-4">
                ¡Hola! 👋🏻 Soy Carlos Danilo Angarita García, Tecnólogo en
                Desarrollo de Sistemas de Información y Abogado de formación,
                con experiencia en MERN Stack, Bootstrap, SQL y Git. Mi pasión
                por aprender y mejorar proyectos para satisfacer a los usuarios
                es insaciable. Estoy emocionado por crecer en la programación y
                enfrentar nuevos desafíos. Si buscas un profesional apasionado
                por la tecnología y con habilidades analíticas, ¡estoy listo
                para colaborar y alcanzar metas excepcionales en el desarrollo
                de software! 🤝🏻
              </p>
            </div>
            <div className="video-container">
              <iframe
                className="w-full video-frame"
                src="https://www.youtube.com/embed/l6Wjrf4EyIo?si=9gIfoJzmtFZ3inkc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                height="400"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-blue-500">
            Mis Habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md text-center skill-card">
              <FaReact className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">React.js</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center skill-card">
              <FaNodeJs className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Node.js</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center skill-card">
              <FaJs className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">JavaScript</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center skill-card">
              <FaServer className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Mysql</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center skill-card">
              <FaDatabase className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Mongo</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center skill-card">
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
            <div className="p-4 bg-white rounded-lg shadow-md text-center hobby-card">
              <FaBook className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Lectura</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center hobby-card">
              <FaDumbbell className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <span className="text-lg font-semibold">Ejercicio</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center hobby-card">
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
