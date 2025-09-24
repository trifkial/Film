<?php
// Proses form pendaftaran
$successMessage = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST["email"]);
    $password = htmlspecialchars($_POST["password"]);
    $successMessage = "Pendaftaran berhasil untuk: $email";
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix UI</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <div class="logo">NETFLIX</div>
            <div class="header-right">
                <select class="language-select">
                    <option value="id">🌐 Bahasa Indonesia</option>
                    <option value="en">🌐 English</option>
                </select>
                <button class="signin-btn" onclick="toggleModal(true)">Daftar</button>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">
                Film, acara TV tak<br>
                terbatas, dan banyak<br>
                lagi
            </h1>
            <p class="hero-subtitle">
                Harga mulai dari Rp54.000. Batalkan kapan pun.
            </p>
            <p class="hero-description">
                Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.
            </p>
            <div class="email-form">
                <input type="email" placeholder="Alamat email" class="email-input" id="emailInput">
                <button class="get-started-btn" onclick="handleEmailSubmit()">Mulai ></button>
            </div>
        </div>
    </section>

    <!-- Trending Section -->
    <!-- Trending Section -->
    <section class="trending">
        <h2 class="section-title">Sedang Tren Sekarang</h2>
        <div class="movie-list">
            <div class="movie-card">
                <img src="https://i.pinimg.com/736x/91/17/75/9117751636528b25a7b4687cab63572d.jpg" alt="Stranger Things">
                <p>Stranger Things</p>
            </div>
            <div class="movie-card">
                <img src="https://i.pinimg.com/736x/ef/71/72/ef7172c57fe0657a1e63f07d757dd2dd.jpg" alt="Money Heist">
                <p>Money Heist</p>
            </div>
            <div class="movie-card">
                <img src="https://i.pinimg.com/736x/23/cc/bf/23ccbf28137082dc795cf308f74f5ec0.jpg" alt="Squid Game">
                <p>Squid Game</p>
            </div>
            <div class="movie-card">
                <img src="https://i.pinimg.com/736x/f2/53/24/f25324402fb725b7410ee3e316aec6f3.jpg" alt="Wednesday">
                <p>Wednesday</p>
            </div>
            <div class="movie-card">
                <img src="https://i.pinimg.com/736x/41/09/2d/41092dbeb31960ca334b95f55948ae50.jpg" alt="Pabrik Gula">
                <p>Pabrik Gula</p>
            </div>
        </div>
    </section>

    <!-- Sign In Modal -->
    <div class="modal" id="signinModal">
        <div class="modal-content">
            <span class="close-btn" onclick="toggleModal(false)">&times;</span>
            <h2 id="signinTitle">Daftar</h2>
            <?php if ($successMessage): ?>
                <p style="color: green;"><?= $successMessage ?></p>
            <?php endif; ?>
            <form id="signinForm" method="post" action="">
                <input type="email" name="email" placeholder="Alamat Email" required>
                <input type="password" name="password" placeholder="Kata Sandi" required>
                <button type="submit">Daftar</button>
            </form>
        </div>
    </div>

    <script>
        function toggleModal(show) {
            const modal = document.getElementById("signinModal");
            modal.style.display = show ? "block" : "none";
        }

        function handleEmailSubmit() {
            const email = document.getElementById("emailInput").value;
            alert("Email dikirim: " + email);
        }
    </script>
</body>
</html>