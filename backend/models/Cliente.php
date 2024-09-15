<?php
// Cliente.php
class Cliente {
    public $customer_id;
    public $nombre;
    public $correo_electronico;
    public $numero_contacto;
    public $segmento;

    public function __construct($nombre, $correo_electronico, $numero_contacto, $segmento) {
        $this->nombre = $nombre;
        $this->correo_electronico = $correo_electronico;
        $this->numero_contacto = $numero_contacto;
        $this->segmento = $segmento;
    }
}
?>
