"use client";

import HeaderComponent from "@/components/home/HeaderComponent";
import NavsComponent from "@/components/home/NavsComponent";
import PersonCard from "@/components/common/PersonCard";

export default function EquipoEditorialPage() {
  return (
    <div>
      <HeaderComponent />
      <NavsComponent />

      <div className="container mx-auto px-6 py-8">
        {/* Encabezado */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-display font-bold text-tec-blue-primary">
            Cuerpo editorial
          </h1>
          <p className="text-gray-500 text-lg mt-3 font-light text-center">
            Conoce al equipo editor, comité editorial y comité científico de la
            revista{" "}
            <span className="font-semibold text-tec-blue-secondary">
              Matemática, Educación e Internet
            </span>
          </p>
        </div>

        {/* Consejo editor */}
        <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
          Consejo Editor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <PersonCard
            name="Nuria Vanessa Figueroa Flores"
            email="nfigueroa@itcr.ac.cr"
            role="Directora"
            institution="Escuela de Matemática"
            location="Instituto Tecnológico de Costa Rica, Costa Rica"
          />
          <PersonCard
            name="Greivin Ramírez A."
            email="gramirez@itcr.ac.cr"
            role="Editor"
            institution="Escuela de Matemática"
            location="Instituto Tecnológico de Costa Rica, Costa Rica"
          />
        </div>

        {/* Comité Editorial */}
        <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
          Comité Editorial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <PersonCard
            name="Greivin Ramírez Arce"
            email="gramirez@itcr.ac.cr"
            institution="Escuela de Matemática"
            location="Instituto Tecnológico de Costa Rica, Costa Rica"
          />
          <PersonCard
            name="Rebeca Solís Ortega"
            email="rsolis@itcr.ac.cr"
            institution="Escuela de Matemática"
            location="Instituto Tecnológico de Costa Rica, Costa Rica"
          />
          <PersonCard
            name="Nuria Vanessa Figueroa Flores"
            email="nfigueroa@itcr.ac.cr"
            institution="Escuela de Matemática"
            location="Instituto Tecnológico de Costa Rica, Costa Rica"
          />
        </div>

        {/* Comité Científico */}
        {/* Comité Científico */}
        <h2 className="text-2xl font-bold text-tec-blue-primary mb-4">
          Comité Científico
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Con correo e institución */}
          <PersonCard
            name="Luis Acuña Prado"
            email="lacuna@itcr.ac.cr"
            location="Instituto Tecnológico de Costa Rica, Costa Rica"
          />
          <PersonCard
            name="Pedro Gómez"
            email="argeifontes@gmail.com"
            location="Universidad de los Andes, Colombia"
          />
          <PersonCard
            name="Luis Solórzano"
            email="lesolorzano@yahoo.es"
            location="Universidad de San Carlos, Guatemala"
          />
          <PersonCard
            name="Dr. Fernando Hitt"
            email="hitt.fernando@uqam.ca"
            location="Université du Québec à Montréal, Canadá"
          />
          <PersonCard
            name="Armando Sánchez Nungaray"
            email="armandos@cimat.mx"
            location="Centro de Investigaciones Matemáticas, A.C., México"
          />
          <PersonCard
            name="Orlando Merino"
            email="merino@math.uri.edu"
            location="University of Rhode Island, United States"
          />
          <PersonCard
            name="Santiago Loaiza"
            email="sloaiza81@gmail.com"
            location="Surface Systems and Instruments, INC., Estados Unidos"
          />
          <PersonCard
            name="Viviana Loaiza Puerta"
            email="loaiza.v@gmail.com"
            location="ETH Zürich, Suiza"
          />

          {/* Con institución pero sin correo */}
          <PersonCard
            name="Carlos Arce"
            location="Universidad de Costa Rica, Costa Rica"
          />
          <PersonCard
            name="Jesús Humberto Cuevas Acosta"
            location="Tecnológico Nacional de México, México"
          />
          <PersonCard
            name="Guillermo Gómez A."
            location="Universidad Nacional Autónoma de México, México"
          />
          <PersonCard
            name="María Fernanda Mora Casasola"
            location="Universidad Latinoamericana de Ciencia y Tecnología, Costa Rica"
          />
          <PersonCard
            name="Rocío del Pilar Aguilar"
            location="Universidad Nacional Autónoma de México, México"
          />
          <PersonCard
            name="Rodrigo Aguilar"
            location="Universidad Nacional Autónoma de México, México"
          />
          <PersonCard
            name="Luis M. Hernández"
            location="Universidad Nacional Autónoma de México, México"
          />
          <PersonCard
            name="Jorge Monge"
            location="Instituto Tecnológico de Costa Rica, Costa Rica"
          />
          <PersonCard
            name="Rodolfo Fallas Soto"
            location="Universidad de Costa Rica, Costa Rica"
          />
          <PersonCard
            name="Nick Jackiw"
            location="Key Curriculum Press, Estados Unidos"
          />
          <PersonCard
            name="José Juan Hernández"
            location="Universidad de la Ciudad México, México"
          />
          <PersonCard
            name="Milena Guevara Bertsch"
            location="Institut für Quantenoptik und Quanteninformation, Austria"
          />
          <PersonCard
            name="Manuel González Navarrete"
            location="Universidade de Sao Paulo, Brasil"
          />
          <PersonCard
            name="Claudio Gaete"
            location="Universidad Bernardo O'Higgins, Santiago, Chile"
          />
          <PersonCard
            name="José Alexandre dos Santos Vaz Martins"
            location="Escola Superior de Turismo e Hotelaria, Portugal"
          />
        </div>
      </div>
    </div>
  );
}
