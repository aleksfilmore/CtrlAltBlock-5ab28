export default function Home() {
  return (
    <div dangerouslySetInnerHTML={ __html: `<div class="container">
    <h1>CTRL+ALT+BLOCK</h1>
    <p class="tagline">The revolution is loading...</p>
    <div id="countdown"></div>
    <p class="footer">© 2025 CTRL+ALT+BLOCK. All rights reserved.</p>
  </div>
  <script src="script.js"></script>` } />
  );
}
