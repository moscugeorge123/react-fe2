import "./User.css";

interface UserProps {
  name?: string;
  surname?: string;
  img?: React.ReactNode;
  children?: React.ReactNode;
}

export function User({ name, surname, img, children }: UserProps) {
  const user = {
    jobTitle: "Programmer",
    profilePicture: "",
    hobbies: ["My first hobby", "My second hobby", "My last hobby"],
  };

  return (
    <>
      {children}
      {name && <p>Name: {name}</p>}
      {surname && <p>Surname: {surname}</p>}

      <p>Job title: {user.jobTitle}</p>
      {img ?? null}

      <ul>
        {user.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

/**
 *
 * Create a new component called MyProfile The component should display your name, a small description and 2-3 hobbies of yours.
 *
 * Display that component inside the App.tsx file
 *
 * OBS: Write your details inside an object which follows the interface below and use curly braces to display the data inside the component.
 */
