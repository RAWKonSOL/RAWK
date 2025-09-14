// --- Jupiter Buy Link ---
const buyBtn1 = document.getElementById("buy-btn1");
// Wrapped SOL mint address (always this)
const WSOL_MINT = "So11111111111111111111111111111111111111112";
// SOL mint address
const SOL_MINT = "sol";
// RAWK mint
const RAWK_MINT = "9BTk2jCyektcN2cegZGvRA5PDfXPr2RkZiagUzkUpump";
// BRAGGIE mint
const BRAGGIE_MINT = "25RjWqPH1zDFApQoPGSVUeoVx56WtMYYmeKWxcHopump";

// Use inputMint/outputMint params so it loads directly
buyBtn1.href = `https://raydium.io/?inputMint=${SOL_MINT}&outputMint=${RAWK_MINT}`;
// BRAGGIE not on raydium yet buyBtn2.href = `https://raydium.io/?inputMint=${SOL_MINT}&outputMint=${BRAGGIE_MINT}`;

// --- Phantom Wallet Connect ---
const connectBtn = document.getElementById("connect");

connectBtn.onclick = async () => {
const provider = window.solana;

if (provider && provider.isPhantom) {
try {
const resp = await provider.connect();
alert("Connected: " + resp.publicKey.toString());
} catch (err) {
alert("Connection failed or rejected: " + err.message);
}
} else {
alert("Phantom Wallet not found. Please install it.");
}
};