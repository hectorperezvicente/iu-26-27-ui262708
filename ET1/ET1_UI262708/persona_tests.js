let persona_def_tests = [

/* ==================== DNI ==================== */

//Falta añadir definición y pruebas para comprobar que la letra es la correcta

Array('persona','dni','input',1,'cumple tamaño mínimo','min_size','ADD','dni_min_size_ko','Tamaño muy corto. Debe tener 9 caracteres'),
Array('persona','dni','input',2,'cumple tamaño máximo','max_size','ADD','dni_max_size_ko','Tamaño muy largo. Debe tener 9 caracteres'),
Array('persona','dni','input',3,'formato DNI válido','format','ADD','dni_format_ko','Formato DNI incorrecto. Debe tener 8 numeros y una letra mayúscula que no puede ser "I", "O", "U" y "Ñ"'),
Array('persona','dni','input',4,'DNI válido','valid','ADD',true,'DNI correcto'),

Array('persona','dni','input',5,'cumple tamaño mínimo','min_size','EDIT','dni_min_size_ko','Tamaño muy corto. Debe tener 9 caracteres'),
Array('persona','dni','input',6,'cumple tamaño máximo','max_size','EDIT','dni_max_size_ko','Tamaño muy largo. Debe tener 9 caracteres'),
Array('persona','dni','input',7,'formato DNI válido','format','EDIT','dni_format_ko','Formato DNI incorrecto. Debe tener 8 numeros y una letra mayúscula que no puede ser "I", "O", "U" y "Ñ"'),
Array('persona','dni','input',8,'DNI válido','valid','EDIT',true,'DNI correcto'),

Array('persona','dni','input',9,'cumple tamaño mínimo','min_size','SEARCH','dni_min_size_ko','Tamaño muy corto. Debe tener 9 caracteres'),
Array('persona','dni','input',10,'cumple tamaño máximo','max_size','SEARCH','dni_max_size_ko','Tamaño muy largo. Debe tener 9 caracteres'),
Array('persona','dni','input',11,'formato DNI válido','format','SEARCH','dni_format_ko','Formato DNI incorrecto. Debe tener 8 numeros y una letra mayúscula que no puede ser "I", "O", "U" y "Ñ"'),
Array('persona','dni','input',12,'DNI válido','valid','SEARCH',true,'DNI correcto'),

/* ==================== NOMBRE ==================== */

Array('persona','nombre_persona','input',13,'cumple tamaño mínimo','min_size','ADD','nombre_persona_min_size_ko','El nombre debe tener al menos 2 caracteres'),
Array('persona','nombre_persona','input',14,'cumple tamaño máximo','max_size','ADD','nombre_persona_max_size_ko','El nombre no puede superar los 45 caracteres'),
Array('persona','nombre_persona','input',15,'formato nombre válido','format','ADD','nombre_persona_format_ko','Solo se permiten letras, ñ, acentos, puntos, guiones y espacios'),
Array('persona','nombre_persona','input',16,'nombre válido','valid','ADD',true,'Nombre correcto'),

Array('persona','nombre_persona','input',17,'cumple tamaño mínimo','min_size','EDIT','nombre_persona_min_size_ko','El nombre debe tener al menos 2 caracteres'),
Array('persona','nombre_persona','input',18,'cumple tamaño máximo','max_size','EDIT','nombre_persona_max_size_ko','El nombre no puede superar los 45 caracteres'),
Array('persona','nombre_persona','input',19,'formato nombre válido','format','EDIT','nombre_persona_format_ko','Solo se permiten letras, ñ, acentos, puntos, guiones y espacios'),
Array('persona','nombre_persona','input',20,'nombre válido','valid','EDIT',true,'Nombre correcto'),

Array('persona','nombre_persona','input',21,'cumple tamaño mínimo','min_size','SEARCH','nombre_persona_min_size_ko','El nombre debe tener al menos 2 caracteres'),
Array('persona','nombre_persona','input',22,'cumple tamaño máximo','max_size','SEARCH','nombre_persona_max_size_ko','El nombre no puede superar los 45 caracteres'),
Array('persona','nombre_persona','input',23,'formato nombre válido','format','SEARCH','nombre_persona_format_ko','Solo se permiten letras, ñ, acentos, puntos, guiones y espacios'),
Array('persona','nombre_persona','input',24,'nombre válido','valid','SEARCH',true,'Nombre correcto'),

/* ==================== APELLIDOS ==================== */

Array('persona','apellidos_persona','input',25,'cumple tamaño mínimo','min_size','ADD','apellidos_persona_min_size_ko','Los apellidos deben tener al menos 3 caracteres'),
Array('persona','apellidos_persona','input',26,'cumple tamaño máximo','max_size','ADD','apellidos_persona_max_size_ko','Los apellidos no pueden superar los 100 caracteres'),
Array('persona','apellidos_persona','input',27,'formato apellidos válido','format','ADD','apellidos_persona_format_ko','Solo se permiten letras, ñ, acentos, puntos, guiones y espacios'),
Array('persona','apellidos_persona','input',28,'apellidos válidos','valid','ADD',true,'Apellidos correctos'),

Array('persona','apellidos_persona','input',29,'cumple tamaño mínimo','min_size','EDIT','apellidos_persona_min_size_ko','Los apellidos deben tener al menos 3 caracteres'),
Array('persona','apellidos_persona','input',30,'cumple tamaño máximo','max_size','EDIT','apellidos_persona_max_size_ko','Los apellidos no pueden superar los 100 caracteres'),
Array('persona','apellidos_persona','input',31,'formato apellidos válido','format','EDIT','apellidos_persona_format_ko','Solo se permiten letras, ñ, acentos, puntos, guiones y espacios'),
Array('persona','apellidos_persona','input',32,'apellidos válidos','valid','EDIT',true,'Apellidos correctos'),

Array('persona','apellidos_persona','input',33,'cumple tamaño mínimo','min_size','SEARCH','apellidos_persona_min_size_ko','Los apellidos deben tener al menos 3 caracteres'),
Array('persona','apellidos_persona','input',34,'cumple tamaño máximo','max_size','SEARCH','apellidos_persona_max_size_ko','Los apellidos no pueden superar los 100 caracteres'),
Array('persona','apellidos_persona','input',35,'formato apellidos válido','format','SEARCH','apellidos_persona_format_ko','Solo se permiten letras, ñ, acentos, puntos, guiones y espacios'),
Array('persona','apellidos_persona','input',36,'apellidos válidos','valid','SEARCH',true,'Apellidos correctos'),

/* ==================== FECHA ==================== */

Array('persona','fechaNacimiento_persona','input',37,'formato fecha válido','format','ADD','fechaNacimiento_persona_format_ko','La fecha debe tener formato dd/mm/aaaa'),
Array('persona','fechaNacimiento_persona','input',38,'fecha válida','valid','ADD',true,'Fecha correcta'),

Array('persona','fechaNacimiento_persona','input',39,'formato fecha válido','format','EDIT','fechaNacimiento_persona_format_ko','La fecha debe tener formato dd/mm/aaaa'),
Array('persona','fechaNacimiento_persona','input',40,'fecha válida','valid','EDIT',true,'Fecha correcta'),

Array('persona','fechaNacimiento_persona','input',41,'formato fecha válido','format','SEARCH','fechaNacimiento_persona_format_ko','La fecha debe tener formato dd/mm/aaaa'),
Array('persona','fechaNacimiento_persona','input',42,'fecha válida','valid','SEARCH',true,'Fecha correcta'),

/* ==================== DIRECCIÓN ==================== */

Array('persona','direccion_persona','textarea',43,'cumple tamaño mínimo','min_size','ADD','direccion_persona_min_size_ko','La dirección debe tener al menos 10 caracteres'),
Array('persona','direccion_persona','textarea',44,'cumple tamaño máximo','max_size','ADD','direccion_persona_max_size_ko','La dirección no puede superar los 200 caracteres'),
Array('persona','direccion_persona','textarea',45,'formato dirección válido','format','ADD','direccion_persona_format_ko','La dirección contiene caracteres no permitidos. Solo permite caracteres afanuméricos con ñ, acentos, puntos, guiones, punto y coma, espacio y /.'),
Array('persona','direccion_persona','textarea',46,'dirección válida','valid','ADD',true,'Dirección correcta'),

Array('persona','direccion_persona','textarea',47,'cumple tamaño mínimo','min_size','EDIT','direccion_persona_min_size_ko','La dirección debe tener al menos 10 caracteres'),
Array('persona','direccion_persona','textarea',48,'cumple tamaño máximo','max_size','EDIT','direccion_persona_max_size_ko','La dirección no puede superar los 200 caracteres'),
Array('persona','direccion_persona','textarea',49,'formato dirección válido','format','EDIT','direccion_persona_format_ko','La dirección contiene caracteres no permitidos. Solo permite caracteres afanuméricos con ñ, acentos, puntos, guiones, punto y coma, espacio y /.'),
Array('persona','direccion_persona','textarea',50,'dirección válida','valid','EDIT',true,'Dirección correcta'),

Array('persona','direccion_persona','textarea',51,'cumple tamaño mínimo','min_size','SEARCH','direccion_persona_min_size_ko','La dirección debe tener al menos 10 caracteres'),
Array('persona','direccion_persona','textarea',52,'cumple tamaño máximo','max_size','SEARCH','direccion_persona_max_size_ko','La dirección no puede superar los 200 caracteres'),
Array('persona','direccion_persona','textarea',53,'formato dirección válido','format','SEARCH','direccion_persona_format_ko','La dirección contiene caracteres no permitidos. Solo permite caracteres afanuméricos con ñ, acentos, puntos, guiones, punto y coma, espacio y /.'),
Array('persona','direccion_persona','textarea',54,'dirección válida','valid','SEARCH',true,'Dirección correcta'),

/* ==================== TELÉFONO ==================== */

Array('persona','telefono_persona','input',55,'cumple tamaño mínimo','min_size','ADD','telefono_persona_min_size_ko','El teléfono debe tener 9 dígitos'),
Array('persona','telefono_persona','input',56,'cumple tamaño máximo','max_size','ADD','telefono_persona_max_size_ko','El teléfono debe tener 9 dígitos'),
Array('persona','telefono_persona','input',57,'formato teléfono válido','format','ADD','telefono_persona_format_ko','Formato de teléfono incorrecto. Debe ser un teléfono español de 9 digitos que empiece por 6, 7, 8 o 9.'),
Array('persona','telefono_persona','input',58,'teléfono válido','valid','ADD',true,'Teléfono correcto'),

Array('persona','telefono_persona','input',59,'cumple tamaño mínimo','min_size','EDIT','telefono_persona_min_size_ko','El teléfono debe tener 9 dígitos'),
Array('persona','telefono_persona','input',60,'cumple tamaño máximo','max_size','EDIT','telefono_persona_max_size_ko','El teléfono debe tener 9 dígitos'),
Array('persona','telefono_persona','input',61,'formato teléfono válido','format','EDIT','telefono_persona_format_ko','Formato de teléfono incorrecto. Debe ser un teléfono español de 9 digitos que empiece por 6, 7, 8 o 9.'),
Array('persona','telefono_persona','input',62,'teléfono válido','valid','EDIT',true,'Teléfono correcto'),

Array('persona','telefono_persona','input',63,'cumple tamaño mínimo','min_size','SEARCH','telefono_persona_min_size_ko','El teléfono debe tener 9 dígitos'),
Array('persona','telefono_persona','input',64,'cumple tamaño máximo','max_size','SEARCH','telefono_persona_max_size_ko','El teléfono debe tener 9 dígitos'),
Array('persona','telefono_persona','input',65,'formato teléfono válido','format','SEARCH','telefono_persona_format_ko','Formato de teléfono incorrecto. Debe ser un teléfono español de 9 digitos que empiece por 6, 7, 8 o 9.'),
Array('persona','telefono_persona','input',66,'teléfono válido','valid','SEARCH',true,'Teléfono correcto'),

/* ==================== EMAIL ==================== */

Array('persona','email_persona','input',67,'formato email válido','format','ADD','email_persona_format_ko','Formato de correo electrónico incorrecto'),
Array('persona','email_persona','input',68,'email válido','valid','ADD',true,'Correo electrónico correcto'),

Array('persona','email_persona','input',69,'formato email válido','format','EDIT','email_persona_format_ko','Formato de correo electrónico incorrecto'),
Array('persona','email_persona','input',70,'email válido','valid','EDIT',true,'Correo electrónico correcto'),

Array('persona','email_persona','input',71,'formato email válido','format','SEARCH','email_persona_format_ko','Formato de correo electrónico incorrecto'),
Array('persona','email_persona','input',72,'email válido','valid','SEARCH',true,'Correo electrónico correcto'),

/* ==================== FOTO ==================== */

//Hay que comprobar si el nombre de la foto es alfabética y un punto

Array('persona','foto_persona','file',73,'extensión permitida','format','ADD','foto_persona_extension_ko','Solo se permiten ficheros JPG o JPEG'),
Array('persona','foto_persona','file',74,'nombre fichero tamaño mínimo','min_size','ADD','foto_persona_nombre_min_size_ko','El nombre del fichero debe tener al menos 3 caracteres'),
//max_size igual o distinto para tamaño y nombre de fichero (campo 6)
Array('persona','foto_persona','file',75,'nombre fichero tamaño máximo','max_size','ADD','foto_persona_nombre_max_size_ko','El nombre del fichero no puede superar los 15 caracteres'),
Array('persona','foto_persona','file',76,'tamaño fichero máximo','max_size','ADD','foto_persona_file_size_ko','El fichero no puede superar los 2 MB'),
Array('persona','foto_persona','file',77,'foto válida','valid','ADD',true,'Foto correcta'),

Array('persona','foto_persona','file',78,'extensión permitida','format','EDIT','foto_persona_extension_ko','Solo se permiten ficheros JPG o JPEG'),
Array('persona','foto_persona','file',79,'nombre fichero tamaño mínimo','min_size','EDIT','foto_persona_nombre_min_size_ko','El nombre del fichero debe tener al menos 3 caracteres'),
Array('persona','foto_persona','file',80,'nombre fichero tamaño máximo','max_size','EDIT','foto_persona_nombre_max_size_ko','El nombre del fichero no puede superar los 15 caracteres'),
Array('persona','foto_persona','file',81,'tamaño fichero máximo','max_size','EDIT','foto_persona_file_size_ko','El fichero no puede superar los 2 MB'),
Array('persona','foto_persona','file',82,'foto válida','valid','EDIT',true,'Foto correcta'),

Array('persona','foto_persona','file',83,'extensión permitida','format','SEARCH','foto_persona_extension_ko','Solo se permiten ficheros JPG o JPEG'),
Array('persona','foto_persona','file',84,'nombre fichero tamaño mínimo','min_size','SEARCH','foto_persona_nombre_min_size_ko','El nombre del fichero debe tener al menos 3 caracteres'),
Array('persona','foto_persona','file',85,'nombre fichero tamaño máximo','max_size','SEARCH','foto_persona_nombre_max_size_ko','El nombre del fichero no puede superar los 15 caracteres'),
Array('persona','foto_persona','file',86,'tamaño fichero máximo','max_size','SEARCH','foto_persona_file_size_ko','El fichero no puede superar los 2 MB'),
Array('persona','foto_persona','file',87,'foto válida','valid','SEARCH',true,'Foto correcta')

];


let persona_pruebas = [
 
/* ==================== DNI ==================== */
 
Array('persona','dni',1,1,'ADD',{ dni: '1234567A' },'dni_min_size_ko'),
Array('persona','dni',2,2,'ADD',{ dni: '123456789A' },'dni_max_size_ko'),
Array('persona','dni',3,3,'ADD',{ dni: 'A1234567B' },'dni_format_ko'),
Array('persona','dni',4,4,'ADD',{ dni: '12345678Z' },true),
 
Array('persona','dni',5,5,'EDIT',{ dni: '1234567A' },'dni_min_size_ko'),
Array('persona','dni',6,6,'EDIT',{ dni: '123456789A' },'dni_max_size_ko'),
Array('persona','dni',7,7,'EDIT',{ dni: 'A1234567B' },'dni_format_ko'),
Array('persona','dni',8,8,'EDIT',{ dni: '12345678Z' },true),
 
Array('persona','dni',9,9,'SEARCH',{ dni: '1234567A' },'dni_min_size_ko'),
Array('persona','dni',10,10,'SEARCH',{ dni: '123456789A' },'dni_max_size_ko'),
Array('persona','dni',11,11,'SEARCH',{ dni: 'A1234567B' },'dni_format_ko'),
Array('persona','dni',12,12,'SEARCH',{ dni: '12345678Z' },true),
 
/* ==================== NOMBRE ==================== */
 
Array('persona','nombre_persona',13,13,'ADD',{ nombre_persona: 'A' },'nombre_persona_min_size_ko'),
Array('persona','nombre_persona',14,14,'ADD',{ nombre_persona: 'A'.repeat(46) },'nombre_persona_max_size_ko'),
Array('persona','nombre_persona',15,15,'ADD',{ nombre_persona: 'Juan123' },'nombre_persona_format_ko'),
Array('persona','nombre_persona',16,16,'ADD',{ nombre_persona: 'María José' },true),
 
Array('persona','nombre_persona',17,17,'EDIT',{ nombre_persona: 'A' },'nombre_persona_min_size_ko'),
Array('persona','nombre_persona',18,18,'EDIT',{ nombre_persona: 'A'.repeat(46) },'nombre_persona_max_size_ko'),
Array('persona','nombre_persona',19,19,'EDIT',{ nombre_persona: 'Juan123' },'nombre_persona_format_ko'),
Array('persona','nombre_persona',20,20,'EDIT',{ nombre_persona: 'María José' },true),
 
Array('persona','nombre_persona',21,21,'SEARCH',{ nombre_persona: 'A' },'nombre_persona_min_size_ko'),
Array('persona','nombre_persona',22,22,'SEARCH',{ nombre_persona: 'A'.repeat(46) },'nombre_persona_max_size_ko'),
Array('persona','nombre_persona',23,23,'SEARCH',{ nombre_persona: 'Juan123' },'nombre_persona_format_ko'),
Array('persona','nombre_persona',24,24,'SEARCH',{ nombre_persona: 'María José' },true),
 
/* ==================== APELLIDOS ==================== */
 
Array('persona','apellidos_persona',25,25,'ADD',{ apellidos_persona: 'Al' },'apellidos_persona_min_size_ko'),
Array('persona','apellidos_persona',26,26,'ADD',{ apellidos_persona: 'A'.repeat(101) },'apellidos_persona_max_size_ko'),
Array('persona','apellidos_persona',27,27,'ADD',{ apellidos_persona: 'García3' },'apellidos_persona_format_ko'),
Array('persona','apellidos_persona',28,28,'ADD',{ apellidos_persona: 'García López' },true),
 
Array('persona','apellidos_persona',29,29,'EDIT',{ apellidos_persona: 'Al' },'apellidos_persona_min_size_ko'),
Array('persona','apellidos_persona',30,30,'EDIT',{ apellidos_persona: 'A'.repeat(101) },'apellidos_persona_max_size_ko'),
Array('persona','apellidos_persona',31,31,'EDIT',{ apellidos_persona: 'García3' },'apellidos_persona_format_ko'),
Array('persona','apellidos_persona',32,32,'EDIT',{ apellidos_persona: 'García López' },true),
 
Array('persona','apellidos_persona',33,33,'SEARCH',{ apellidos_persona: 'Al' },'apellidos_persona_min_size_ko'),
Array('persona','apellidos_persona',34,34,'SEARCH',{ apellidos_persona: 'A'.repeat(101) },'apellidos_persona_max_size_ko'),
Array('persona','apellidos_persona',35,35,'SEARCH',{ apellidos_persona: 'García3' },'apellidos_persona_format_ko'),
Array('persona','apellidos_persona',36,36,'SEARCH',{ apellidos_persona: 'García López' },true),
 
/* ==================== FECHA NACIMIENTO ==================== */
 
Array('persona','fechaNacimiento_persona',37,37,'ADD',{ fechaNacimiento_persona: '2024-01-15' },'fechaNacimiento_persona_format_ko'),
Array('persona','fechaNacimiento_persona',38,38,'ADD',{ fechaNacimiento_persona: '15/06/1990' },true),
 
Array('persona','fechaNacimiento_persona',39,39,'EDIT',{ fechaNacimiento_persona: '2024-01-15' },'fechaNacimiento_persona_format_ko'),
Array('persona','fechaNacimiento_persona',40,40,'EDIT',{ fechaNacimiento_persona: '15/06/1990' },true),
 
Array('persona','fechaNacimiento_persona',41,41,'SEARCH',{ fechaNacimiento_persona: '2024-01-15' },'fechaNacimiento_persona_format_ko'),
Array('persona','fechaNacimiento_persona',42,42,'SEARCH',{ fechaNacimiento_persona: '15/06/1990' },true),
 
/* ==================== DIRECCIÓN ==================== */
 
Array('persona','direccion_persona',43,43,'ADD',{ direccion_persona: 'Calle 1' },'direccion_persona_min_size_ko'),
Array('persona','direccion_persona',44,44,'ADD',{ direccion_persona: 'A'.repeat(201) },'direccion_persona_max_size_ko'),
Array('persona','direccion_persona',45,45,'ADD',{ direccion_persona: 'Calle Mayor, 12' },'direccion_persona_format_ko'),
Array('persona','direccion_persona',46,46,'ADD',{ direccion_persona: 'Calle Mayor 12; Piso 3/B' },true),
 
Array('persona','direccion_persona',47,47,'EDIT',{ direccion_persona: 'Calle 1' },'direccion_persona_min_size_ko'),
Array('persona','direccion_persona',48,48,'EDIT',{ direccion_persona: 'A'.repeat(201) },'direccion_persona_max_size_ko'),
Array('persona','direccion_persona',49,49,'EDIT',{ direccion_persona: 'Calle Mayor, 12' },'direccion_persona_format_ko'),
Array('persona','direccion_persona',50,50,'EDIT',{ direccion_persona: 'Calle Mayor 12; Piso 3/B' },true),
 
Array('persona','direccion_persona',51,51,'SEARCH',{ direccion_persona: 'Calle 1' },'direccion_persona_min_size_ko'),
Array('persona','direccion_persona',52,52,'SEARCH',{ direccion_persona: 'A'.repeat(201) },'direccion_persona_max_size_ko'),
Array('persona','direccion_persona',53,53,'SEARCH',{ direccion_persona: 'Calle Mayor, 12' },'direccion_persona_format_ko'),
Array('persona','direccion_persona',54,54,'SEARCH',{ direccion_persona: 'Calle Mayor 12; Piso 3/B' },true),
 
/* ==================== TELÉFONO ==================== */
 
Array('persona','telefono_persona',55,55,'ADD',{ telefono_persona: '12345' },'telefono_persona_min_size_ko'),
Array('persona','telefono_persona',56,56,'ADD',{ telefono_persona: '1234567890' },'telefono_persona_max_size_ko'),
Array('persona','telefono_persona',57,57,'ADD',{ telefono_persona: '123-45678' },'telefono_persona_format_ko'),
Array('persona','telefono_persona',58,58,'ADD',{ telefono_persona: '612345678' },true),
 
Array('persona','telefono_persona',59,59,'EDIT',{ telefono_persona: '12345' },'telefono_persona_min_size_ko'),
Array('persona','telefono_persona',60,60,'EDIT',{ telefono_persona: '1234567890' },'telefono_persona_max_size_ko'),
Array('persona','telefono_persona',61,61,'EDIT',{ telefono_persona: '123-45678' },'telefono_persona_format_ko'),
Array('persona','telefono_persona',62,62,'EDIT',{ telefono_persona: '612345678' },true),
 
Array('persona','telefono_persona',63,63,'SEARCH',{ telefono_persona: '12345' },'telefono_persona_min_size_ko'),
Array('persona','telefono_persona',64,64,'SEARCH',{ telefono_persona: '1234567890' },'telefono_persona_max_size_ko'),
Array('persona','telefono_persona',65,65,'SEARCH',{ telefono_persona: '123-45678' },'telefono_persona_format_ko'),
Array('persona','telefono_persona',66,66,'SEARCH',{ telefono_persona: '612345678' },true),
 
/* ==================== EMAIL ==================== */
 
Array('persona','email_persona',67,67,'ADD',{ email_persona: 'correo@invalido' },'email_persona_format_ko'),
Array('persona','email_persona',68,68,'ADD',{ email_persona: 'usuario@dominio.com' },true),
 
Array('persona','email_persona',69,69,'EDIT',{ email_persona: 'correo@invalido' },'email_persona_format_ko'),
Array('persona','email_persona',70,70,'EDIT',{ email_persona: 'usuario@dominio.com' },true),
 
Array('persona','email_persona',71,71,'SEARCH',{ email_persona: 'correo@invalido' },'email_persona_format_ko'),
Array('persona','email_persona',72,72,'SEARCH',{ email_persona: 'usuario@dominio.com' },true),
 
/* ==================== FOTO ==================== */
 
Array('persona','foto_persona',73,73,'ADD',{ foto_persona: { nombre: 'foto.png', tamanoKB: 500 } },'foto_persona_extension_ko'),
Array('persona','foto_persona',74,74,'ADD',{ foto_persona: { nombre: 'ab.jpg', tamanoKB: 500 } },'foto_persona_nombre_min_size_ko'),
Array('persona','foto_persona',75,75,'ADD',{ foto_persona: { nombre: 'fotografiamuylarga.jpg', tamanoKB: 500 } },'foto_persona_nombre_max_size_ko'),
Array('persona','foto_persona',76,76,'ADD',{ foto_persona: { nombre: 'foto.jpg', tamanoKB: 2500 } },'foto_persona_file_size_ko'),
Array('persona','foto_persona',77,77,'ADD',{ foto_persona: { nombre: 'foto.jpg', tamanoKB: 800 } },true),
 
Array('persona','foto_persona',78,78,'EDIT',{ foto_persona: { nombre: 'foto.png', tamanoKB: 500 } },'foto_persona_extension_ko'),
Array('persona','foto_persona',79,79,'EDIT',{ foto_persona: { nombre: 'ab.jpg', tamanoKB: 500 } },'foto_persona_nombre_min_size_ko'),
Array('persona','foto_persona',80,80,'EDIT',{ foto_persona: { nombre: 'fotografiamuylarga.jpg', tamanoKB: 500 } },'foto_persona_nombre_max_size_ko'),
Array('persona','foto_persona',81,81,'EDIT',{ foto_persona: { nombre: 'foto.jpg', tamanoKB: 2500 } },'foto_persona_file_size_ko'),
Array('persona','foto_persona',82,82,'EDIT',{ foto_persona: { nombre: 'foto.jpg', tamanoKB: 800 } },true),
 
Array('persona','foto_persona',83,83,'SEARCH',{ foto_persona: { nombre: 'foto.png', tamanoKB: 500 } },'foto_persona_extension_ko'),
Array('persona','foto_persona',84,84,'SEARCH',{ foto_persona: { nombre: 'ab.jpg', tamanoKB: 500 } },'foto_persona_nombre_min_size_ko'),
Array('persona','foto_persona',85,85,'SEARCH',{ foto_persona: { nombre: 'fotografiamuylarga.jpg', tamanoKB: 500 } },'foto_persona_nombre_max_size_ko'),
Array('persona','foto_persona',86,86,'SEARCH',{ foto_persona: { nombre: 'foto.jpg', tamanoKB: 2500 } },'foto_persona_file_size_ko'),
Array('persona','foto_persona',87,87,'SEARCH',{ foto_persona: { nombre: 'foto.jpg', tamanoKB: 800 } },true)
 
];