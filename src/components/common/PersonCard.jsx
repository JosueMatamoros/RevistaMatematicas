
export default function PersonCard({
  name,
  email,
  role,
  institution,
  location,
}) {
  return (
    <div className="p-4 border-l-4 border-x-tec-blue-secondary rounded-xl shadow-md text-center hover:scale-[1.02] transition-transform hover:shadow-lg bg-white">
      {/* Nombre */}
      <h3 className="text-base font-semibold text-gray-900">{name}</h3>

      {/* Correo */}
      {email && (
        <a
          href={`mailto:${email}`}
          className="flex justify-center items-center gap-1 text-sm text-tec-blue-secondary hover:underline"
        >
          {email}
          {/* SVG pequeño en lugar de react-icons */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3 h-3"
          >
            <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" />
            <path d="M5 5h5V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2v5H5V5z" />
          </svg>
        </a>
      )}

      {/* Rol */}
      {role && (
        <div className="my-2 flex justify-center">
          <span className="inline-block px-2 text-[11px] uppercase tracking-wide rounded-md bg-blue-50 text-tec-blue-primary border border-blue-200">
            {role}
          </span>
        </div>
      )}

      {/* Institución */}
      {institution && <p className="text-sm text-gray-600">{institution}</p>}

      {/* Ubicación */}
      {location && <p className="text-sm text-gray-500">{location}</p>}
    </div>
  );
}
