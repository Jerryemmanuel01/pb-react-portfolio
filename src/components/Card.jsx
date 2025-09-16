const Card = ({ occupation, age, language, location, name }) => {
  return (
    <div className="max-w-[800px] h-[250px] shadow-xl rounded-lg space-y-4 bg-white p-6 mt-6">
      <h3>
        My name is <span className="font-bold">{name}</span>
      </h3>
      <h3>
        I am a <span className="font-bold">{occupation}</span>
      </h3>
      <h2>
        I am <span className="font-bold">{age}</span> old
      </h2>
      <h2>
        I speak <span className="font-bold">{language}</span>
      </h2>
      <h2>
        and i leave at <span className="font-bold">{location}</span>
      </h2>
    </div>
  );
};

export default Card;
