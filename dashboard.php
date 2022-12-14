<?php
session_start();

if (!isset($_SESSION['loggedin'])) {
	header('Location: index.php');
	exit;
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>UPC Finance | Dashboard</title>
</head>
<body>
    <header>
        <h1>UPC Finance</h1>
        <nav>
            <a class="active" href="#">Dashboard</a><!--
         --><a href="nuevo-leasing.php">Nuevo Leasing</a><!--
         --><a href="configuracion.php">Configuración</a><!--
         --><a href="API/login.php?action=logout"><i class="bi bi-power"></i></a>
        </nav>
    </header>

    <div class="container">
        <section class="title">
            <h2>Bienvenido, <?= $_SESSION['nombre'] ?></h2>
            <a class="btn btn-primary" href="nuevo-leasing.php">Registrar Nuevo Leasing</a>
        </section>

        <table id="summaries" class="display">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Saldo a Financiar</th>
                    <th>Préstamo</th>
                    <th>Total de Cuotas</th>
                    <th>Tasa de Descuento</th>
                    <th>TIR</th>
                    <th>TCEA</th>
                    <th>VAN</th>
                    <th></th>
                </tr>
            </thead>

        </table>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>
    <script>
        var moneda = '<?= $_SESSION['moneda'] ?>';
    </script>
    <script src="js/dashboard.js"></script>
</body>
</html>