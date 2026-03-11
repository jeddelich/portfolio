import { theme } from "@/styles/theme"

const boxStyle = {
  padding: "20px",
  borderRadius: "8px",
  marginBottom: "20px"
}

const Home = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      
      {/* HERO */}
      <section style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Hello, I'm Jed
        </h1>

        <p style={{ fontSize: "18px", color: theme.colors.muted }}>
          I build modern web applications using React.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: theme.colors.primary,
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          View My Projects
        </button>
      </section>

      {/* COLOR TEST */}
      <section>
        <h2 style={{ marginBottom: "20px" }}>Color Palette</h2>

        <div
          style={{
            ...boxStyle,
            background: theme.colors.surface
          }}
        >
          Surface / Card Background
        </div>

        <div
          style={{
            ...boxStyle,
            background: theme.colors.primary,
            color: "white"
          }}
        >
          Primary Color
        </div>

        <div
          style={{
            ...boxStyle,
            background: theme.colors.secondary
          }}
        >
          Secondary Color
        </div>

        <div
          style={{
            ...boxStyle,
            background: theme.gradients.accent,
            color: "white"
          }}
        >
          Gradient Accent
        </div>
      </section>

      {/* TYPOGRAPHY TEST */}
      <section style={{ marginTop: "50px" }}>
        <h2>Typography Preview</h2>

        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>

        <p>
          This is body text using the Inter font. It should be clean and easy
          to read. Good typography makes a website feel much more professional.
        </p>

        <p style={{ color: theme.colors.muted }}>
          This is muted text often used for descriptions.
        </p>
      </section>
    </div>
  )
}

export default Home