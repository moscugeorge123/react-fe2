import Card from "./Card";

/** Extract a Card component from the markup below, and use the children prop to pass different JSX to it */
export default function Profile() {
  return (
    <div>
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>

      <Card
        title="About"
        description="Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis."
      />
    </div>
  );
}
