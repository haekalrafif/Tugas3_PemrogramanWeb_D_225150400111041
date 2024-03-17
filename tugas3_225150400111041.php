<?php
    if (isset($_POST["nama"])){?>
        <table border="">
            <tr>
                <th>
                    Nama
                </th>
                <th>
                    NIM
                </th>
                <th>
                    Jenis Kelamin
                </th>
                <th>
                    Tanggal Lahir
                </th>
                <th>
                    Program Studi
                </th>
            </tr>
            <tr>
                <td>
                    <?php
                    echo $_POST["nama"];
                    ?>
                </td>
                <td>
                    <?php
                    echo $_POST["nim"];
                    ?>
                </td>
                <td>
                    <?php
                    echo $_POST["jenisKelamin"];
                    ?>
                </td>
                <td>
                    <?php
                    echo $_POST["tanggalLahir"];
                    ?>
                </td>
                <td>
                    <?php
                    echo $_POST["programStudi"];
                    ?>
                </td>
            </tr>
        </table>
    <?php
    }
    ?>
