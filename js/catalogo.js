/*
 * Catálogo de M&A Eléctricos e Ingeniería S.A.S.
 * Fuente: brochure de productos y servicios.
 *
 * Para agregar o cambiar productos solo hay que editar este archivo:
 *   - lineas[]            → cada línea (tarjeta en el inicio y bloque en productos.html)
 *   - lineas[].grupos[]   → subcategorías con marcas, referencias e imágenes
 *   - fotos               → [archivo en img/prod/ (sin extensión), nombre del producto]
 */
window.MYA = {
  empresa: {
    nombre: 'M&A Eléctricos e Ingeniería S.A.S.',
    whatsapp: '573018704924',
    whatsappVisible: '(301) 870 4924',
    correo: 'electricoseingenierias@hotmail.com'
  },

  lineas: [
    {
      id: 'iluminacion',
      nombre: 'Iluminación LED',
      resumen: 'Bombillos, tubos, paneles, reflectores, alumbrado de poste y luminaria solar.',
      portada: '059',
      grupos: [
        {
          nombre: 'Bombillos ahorradores LED',
          marcas: ['Mercury', 'Sylvania', 'Lumek', 'Lexmana', 'Osram', 'Deko', 'Munilux', 'Karluz'],
          items: [
            'Bombillo ahorrador LED de 3W hasta 100W',
            'Bombillo vela LED 3W con rosca E27, E14 y E12',
            'Bombillo ahorrador LED 6.2W y 9W rosca E27',
            'Bombillo dicroico LED con rosca GU10 y bipin',
            'Soporte plafón en loza y plástico',
            'Soporte en loza de dos piezas y mogul',
            'Soporte GU10',
            'Dimmer',
            'Convertidor de GU10 a rosca E27'
          ],
          fotos: [
            ['016', 'Bombillo LED industrial'],
            ['017', 'Bombillos LED ahorradores'],
            ['020', 'Bombillo LED alta potencia'],
            ['011', 'Bombillo LED Sylvania'],
            ['019', 'Bombillo dicroico LED GU10'],
            ['003', 'Bombillo dicroico LED bipin'],
            ['018', 'Spot LED de incrustar'],
            ['005', 'Dimmer'],
            ['012', 'Soporte plafón en loza'],
            ['014', 'Soporte plafón plástico'],
            ['013', 'Soporte en loza de dos piezas'],
            ['015', 'Soporte mogul']
          ]
        },
        {
          nombre: 'Tubos y cinta LED',
          marcas: ['Sylvania', 'Philips', 'Lumek', 'Karluz', 'Munilux'],
          items: ['Tubo o vela LED T5 y T8', 'Lámpara de emergencia', 'Cinta LED 50/50 y 35/18 x 5 m'],
          fotos: [
            ['037', 'Tubo LED T8'],
            ['036', 'Tubos LED de colores'],
            ['038', 'Cinta LED'],
            ['050', 'Lámpara de emergencia']
          ]
        },
        {
          nombre: 'Ojo de buey LED',
          marcas: [],
          items: [
            'Ojo de buey ecualizable',
            'Ojo de buey con vidrio y sin vidrio',
            'Carcasa para ojo de buey',
            'Bala de 5 y 7 LED satinada luz cálida',
            'Bala de piso'
          ],
          fotos: [
            ['039', 'Ojo de buey ecualizable'],
            ['051', 'Ojo de buey LED'],
            ['052', 'Ojo de buey LED dirigible'],
            ['040', 'Carcasa para ojo de buey'],
            ['041', 'Bala de 7 LED'],
            ['042', 'Bala de piso']
          ]
        },
        {
          nombre: 'Reflectores',
          marcas: ['Lumek', 'Philips', 'Lexmana', 'Karluz', 'Munilux'],
          items: [
            'Reflector LED de 10W, 20W, 50W, 100W, 200W y 400W',
            'Reflector multicolor de 10W, 20W, 50W y 100W',
            'Reflector antiexplosivo'
          ],
          fotos: [
            ['059', 'Reflector LED'],
            ['060', 'Reflector LED modular'],
            ['078', 'Reflector LED multicolor'],
            ['079', 'Reflector antiexplosivo'],
            ['061', 'Reflector LED de alta potencia']
          ]
        },
        {
          nombre: 'Luminaria de poste',
          marcas: [],
          items: [
            'Luminaria de poste de 50W hasta 500W',
            'Fotocelda y su base',
            'Brazo para luminaria',
            'Poste para luminaria',
            'Cinta bandit y hebilla',
            'Collarín para poste'
          ],
          fotos: [
            ['071', 'Luminaria de poste LED'],
            ['063', 'Luminaria LED para alumbrado'],
            ['064', 'Luminaria de poste modular'],
            ['076', 'Fotocelda'],
            ['077', 'Fotocelda con base'],
            ['075', 'Collarín para poste'],
            ['073', 'Cinta bandit'],
            ['074', 'Hebilla para cinta bandit'],
            ['072', 'Brazo para luminaria']
          ]
        },
        {
          nombre: 'Luminaria solar',
          marcas: [],
          items: [
            'Reflector LED solar desde 30W hasta 500W',
            'Luminaria solar de poste desde 80W hasta 500W',
            'Panel solar',
            'Luminaria solar para jardín'
          ],
          fotos: [
            ['085', 'Reflector LED solar con panel'],
            ['084', 'Luminaria solar de poste'],
            ['082', 'Luminaria solar integrada'],
            ['083', 'Luminaria solar para jardín']
          ]
        },
        {
          nombre: 'Lámparas y paneles',
          marcas: ['Mercury', 'Sylvania', 'Lumek', 'Lexmana', 'Osram', 'Deko', 'Munilux', 'Karluz', 'Aura'],
          items: [
            'Lámpara hermética LED de 2 tubos',
            'Panel LED de incrustar y de sobreponer de 3W hasta 24W',
            'Bala LED 120x30 de 30W y 48W',
            'Panel LED 60x60 de 48W',
            'Lámpara recargable',
            'Lámpara de exterior'
          ],
          fotos: [
            ['101', 'Panel LED redondo de incrustar'],
            ['099', 'Panel LED redondo de sobreponer'],
            ['102', 'Panel LED cuadrado de incrustar'],
            ['100', 'Panel LED cuadrado de sobreponer'],
            ['098', 'Lámpara hermética LED'],
            ['096', 'Panel LED 60x60'],
            ['097', 'Bala LED 120x30'],
            ['103', 'Lámpara recargable'],
            ['104', 'Lámpara de exterior tipo tortuga'],
            ['105', 'Lámpara de exterior']
          ]
        }
      ]
    },
    {
      id: 'cables',
      nombre: 'Cables y alambres',
      resumen: 'Cable de 7 hilos, encauchetado, dúplex, desnudo, vehicular, UTP y coaxial.',
      portada: '161',
      grupos: [
        {
          nombre: 'Cable de 7 filamentos',
          marcas: ['Procables', 'Centelsa', 'Nexans', 'Andes Cables', 'Argos', 'Condumex'],
          items: ['Cable desde calibre #2 hasta #14'],
          fotos: [
            ['161', 'Cable de cobre aislado'],
            ['160', 'Cables de potencia']
          ]
        },
        {
          nombre: 'Alambre de 1 filamento',
          marcas: ['Procables', 'Centelsa', 'Nexans'],
          items: ['Alambre desde calibre #8 hasta #14'],
          fotos: [
            ['198', 'Alambre de cobre'],
            ['199', 'Rollo de alambre']
          ]
        },
        {
          nombre: 'Cable encauchetado',
          marcas: ['Procables', 'Centelsa'],
          items: ['Cable encauchetado desde 2x10 hasta 4x16'],
          fotos: [
            ['162', 'Cable encauchetado'],
            ['163', 'Cable encauchetado en carrete']
          ]
        },
        {
          nombre: 'Cable dúplex',
          marcas: ['Procables', 'Centelsa'],
          items: ['Cable dúplex 2x10, 2x12, 2x14, 2x16, 2x18, 2x20 y 2x22'],
          fotos: [
            ['158', 'Cable dúplex'],
            ['159', 'Rollo de cable dúplex']
          ]
        },
        {
          nombre: 'Cobre y aluminio desnudo',
          marcas: ['Procables', 'Centelsa'],
          items: ['Cable de cobre y aluminio desnudo #2, #4, 1/0, 2/0, 3/0 y 4/0', 'Cable soldador de 1/0 hasta 4/0'],
          fotos: [
            ['190', 'Cable de cobre desnudo'],
            ['191', 'Cable de aluminio desnudo'],
            ['182', 'Cable de aluminio']
          ]
        },
        {
          nombre: 'Cable vehicular',
          marcas: [],
          items: ['Cable vehicular desde calibre 22 hasta calibre 8'],
          fotos: [
            ['173', 'Cable vehicular'],
            ['184', 'Cable vehicular calibre 22']
          ]
        },
        {
          nombre: 'Cable UTP',
          marcas: [],
          items: ['Cable UTP categoría 5 y 6', 'Bota industrial para cable UTP', 'Conector RJ45'],
          fotos: [
            ['174', 'Cable UTP en caja'],
            ['175', 'Cable UTP'],
            ['185', 'Cable de red con RJ45'],
            ['186', 'Bota para cable UTP'],
            ['187', 'Conector RJ45']
          ]
        },
        {
          nombre: 'Cable coaxial',
          marcas: [],
          items: ['Cable coaxial y conectores'],
          fotos: [
            ['172', 'Cable coaxial'],
            ['171', 'Conector para cable coaxial'],
            ['170', 'Cable coaxial (estructura)']
          ]
        }
      ]
    },
    {
      id: 'cajas-tableros',
      nombre: 'Cajas, tableros y cofres',
      resumen: 'Cajas de circuitos, de paso y registro, tableros, racks y cofres con norma RETIE.',
      portada: '120',
      grupos: [
        {
          nombre: 'Cajas, tableros y cofres',
          marcas: ['Indelpa', 'Tercol', 'Karluz', 'Melta Delk', 'Sassin', 'Legrand'],
          items: [
            'Caja de circuitos con y sin puerta',
            'Caja de paso metálica y plástica',
            'Caja de registro metálica y plástica',
            'Caja PVC y galvanizada',
            'Caja octagonal PVC, galvanizada y Rawelt',
            'Caja Mini Pragma de sobreponer e incrustar',
            'Caja para contador de luz',
            'Rack gabinete para comunicaciones',
            'Tapas 2x4, 4x4, octagonal, Rawelt y doble para intemperie',
            'Tablero bifásico y trifásico, con y sin puerta, metálico y plástico',
            'Cofres con norma RETIE'
          ],
          fotos: [
            ['110', 'Tablero de circuitos'],
            ['111', 'Tablero con puerta'],
            ['112', 'Caja de circuitos con puerta'],
            ['113', 'Caja Mini Pragma'],
            ['114', 'Caja de paso plástica'],
            ['115', 'Caja de registro plástica'],
            ['116', 'Caja para breaker'],
            ['117', 'Caja para medidor'],
            ['118', 'Cajas PVC y tapas'],
            ['119', 'Cajas Rawelt y tapas'],
            ['120', 'Cofre metálico RETIE'],
            ['121', 'Cofre y caja para contador'],
            ['122', 'Rack gabinete para comunicaciones'],
            ['127', 'Tapa doble para intemperie']
          ]
        }
      ]
    },
    {
      id: 'breakers',
      nombre: 'Breakers',
      resumen: 'Breakers atornillables, de riel y enchufables en todas las configuraciones.',
      portada: '133',
      grupos: [
        {
          nombre: 'Breakers',
          marcas: ['Luminex', 'Siemens', 'Chint', 'Schneider Electric', 'Eaton', 'Legrand', 'Ciles'],
          items: ['Breaker atornillable, de riel y enchufable', 'Breaker THQL – THQC monopolar, bipolar y tripolar'],
          fotos: [
            ['132', 'Breaker atornillable'],
            ['133', 'Breaker de riel'],
            ['134', 'Breaker enchufable']
          ]
        }
      ]
    },
    {
      id: 'maniobra-control',
      nombre: 'Maniobra, control y señalización',
      resumen: 'Contactores, relés, pulsadores, arrancadores, borneras y más.',
      portada: '137',
      grupos: [
        {
          nombre: 'Maniobra, control y señalización',
          marcas: ['Siemens', 'Schneider Electric', 'ABB', 'Lovato', 'Eaton', 'Chint', 'Autonics', 'EBC'],
          items: [
            'Contactores',
            'Relé térmico',
            'Pulsadores',
            'Lámpara de señalización',
            'Interruptores',
            'Detectores de proximidad fotoeléctricos',
            'Detectores de capacidad',
            'Conmutador de 3 posiciones',
            'Conmutador de 2 posiciones con llave',
            'Arrancador',
            'Borneras',
            'Guardamotor',
            'Regleta',
            'Relevo de 8 pines'
          ],
          fotos: [
            ['130', 'Contactor con relé térmico'],
            ['137', 'Contactor'],
            ['138', 'Relé térmico'],
            ['139', 'Interruptor en caja moldeada'],
            ['140', 'Pulsadores y lámparas de señalización'],
            ['141', 'Conmutador de 3 posiciones']
          ]
        }
      ]
    },
    {
      id: 'transformadores',
      nombre: 'Transformadores y accesorios',
      resumen: 'Transformadores de potencia, aisladores de baja y alta tensión, fusibles y capacetes.',
      portada: '148',
      grupos: [
        {
          nombre: 'Aisladores de baja y alta tensión',
          marcas: ['Celsa', 'Melec', 'Tyco', '3M', 'Importados'],
          items: ['Aisladores tipo pin 13.2, 23 y 34.5 kV', 'Aisladores post type', 'Aisladores de suspensión de 6” y 10”'],
          fotos: [
            ['144', 'Aisladores de suspensión'],
            ['145', 'Aisladores de baja tensión'],
            ['146', 'Aisladores post type']
          ]
        },
        {
          nombre: 'Transformadores de potencia',
          marcas: ['ABB', 'Magnetrón', 'Rymel', 'Tesla', 'Prolec GE', 'Siemens'],
          items: [
            'Transformadores de potencia monofásicos y trifásicos',
            'Fusible de baja y alta tensión',
            'Capacete de ½” hasta 4”'
          ],
          fotos: [
            ['148', 'Transformadores de potencia'],
            ['149', 'Cortacircuito con fusible'],
            ['150', 'Fusible tipo hilo'],
            ['151', 'Capacete']
          ]
        }
      ]
    },
    {
      id: 'tuberia',
      nombre: 'Tubería y accesorios',
      resumen: 'Tubería conduit PVC, IMC galvanizada y EMT con uniones, conectores y curvas.',
      portada: '229',
      grupos: [
        {
          nombre: 'Tubería conduit y accesorios',
          marcas: ['Durman', 'TuboCosta', 'Colmena', 'Gerfor', 'Plastimec', 'Importados'],
          items: [
            'Tubo conduit PVC, IMC galvanizado y EMT desde ½” hasta 4”',
            'Unión conduit PVC, IMC galvanizado y EMT desde ½” hasta 4”',
            'Conector conduit PVC, IMC galvanizado y EMT desde ½” hasta 4”',
            'Curva conduit PVC, IMC galvanizado y EMT desde ½” hasta 4”'
          ],
          fotos: [
            ['229', 'Tubo conduit PVC'],
            ['228', 'Tubo conduit metálico'],
            ['226', 'Tubo conduit galvanizado'],
            ['236', 'Curva conduit metálica'],
            ['238', 'Curva conduit galvanizada']
          ]
        }
      ]
    },
    {
      id: 'coraza-conduletas',
      nombre: 'Coraza, conduletas y canaletas',
      resumen: 'Coraza liquid tight, flexi conduit, conduletas, conectores y canaletas.',
      portada: '311',
      grupos: [
        {
          nombre: 'Coraza y flexi conduit',
          marcas: ['Iluram', 'Appleton', 'Crouse-Hinds', 'Albron', 'Arlington'],
          items: ['Coraza liquid tight de ½” a 4”', 'Flexi conduit'],
          fotos: [
            ['311', 'Coraza liquid tight'],
            ['312', 'Flexi conduit']
          ]
        },
        {
          nombre: 'Conduletas y canaletas',
          marcas: ['Iluram', 'Appleton', 'Crouse-Hinds', 'Albron', 'Arlington'],
          items: [
            'Conduleta en aluminio o hierro fundido tipo L, LB, LR y T',
            'Conector recto liquid tight de ½” a 4”',
            'Conector curvo liquid tight de ½” a 4”',
            'Derivación en T',
            'Canaletas con y sin adhesivo',
            'Chazos y tornillos'
          ],
          fotos: [
            ['313', 'Conector recto liquid tight'],
            ['314', 'Conector curvo liquid tight'],
            ['315', 'Conduleta'],
            ['316', 'Conduleta tipo LB'],
            ['317', 'Conduleta tipo LR'],
            ['318', 'Conduleta tipo T'],
            ['329', 'Canaleta'],
            ['330', 'Canaleta con adhesivo'],
            ['319', 'Canaleta con tapa'],
            ['328', 'Canaleta de piso'],
            ['333', 'Ángulo para canaleta'],
            ['334', 'Ángulo externo para canaleta'],
            ['335', 'Derivación en T para canaleta'],
            ['336', 'Ángulo plano para canaleta']
          ]
        }
      ]
    },
    {
      id: 'terminales-tomas',
      nombre: 'Terminales, clavijas y tomas',
      resumen: 'Terminales, conectores de perforación, clavijas, tomas e interruptores.',
      portada: '299',
      grupos: [
        {
          nombre: 'Terminales, conectores, clavijas y tomas',
          marcas: ['EBCHQ', '3M Colombia', 'Industrial Verni', 'Burndy', 'Codelca'],
          items: [
            'Terminal con tornillo',
            'Terminal tipo zapato en cobre',
            'Terminal tipo “O” anillo y tipo “U”',
            'Terminal tipo pin y faston',
            'Conector de perforación',
            'Conector recto liquid tight de ½” a 4”',
            'Conector curvo liquid tight de ½” a 4”',
            'Clavijas con y sin polo',
            'Toma aérea con y sin polo'
          ],
          fotos: [
            ['306', 'Terminal con tornillo'],
            ['303', 'Conector de cobre'],
            ['298', 'Conector de perforación'],
            ['300', 'Terminal tipo pin'],
            ['301', 'Terminal faston'],
            ['308', 'Terminal tipo U'],
            ['291', 'Terminal tipo O anillo'],
            ['299', 'Terminal tipo zapato en cobre'],
            ['283', 'Terminal de compresión'],
            ['292', 'Clavija de caucho'],
            ['293', 'Clavija con polo'],
            ['304', 'Toma aérea'],
            ['290', 'Clavija y toma industrial'],
            ['294', 'Toma doble'],
            ['296', 'Toma doble naranja'],
            ['288', 'Toma doble con polo'],
            ['286', 'Toma sencilla'],
            ['263', 'Adaptador triple'],
            ['265', 'Toma de incrustar trifilar'],
            ['266', 'Toma aérea de seguridad'],
            ['268', 'Clavija de seguridad'],
            ['270', 'Clavija con polo reforzada'],
            ['271', 'Toma doble con polo a tierra'],
            ['272', 'Toma con interruptor'],
            ['273', 'Interruptor sencillo'],
            ['274', 'Interruptor doble']
          ]
        }
      ]
    },
    {
      id: 'cinta-soldadura',
      nombre: 'Cinta aislante y soldadura',
      resumen: 'Cinta aislante para baja y alta tensión, soldadura PVC y exotérmica.',
      portada: '223',
      grupos: [
        {
          nombre: 'Cinta aislante en baja y alta tensión',
          marcas: ['Scotch', 'Cobra'],
          items: ['Cinta aislante Super 33', 'Cinta eléctrica autofundente para alto voltaje', 'Cinta aislante de colores'],
          fotos: [
            ['221', 'Cinta aislante Super 33'],
            ['222', 'Cinta autofundente'],
            ['223', 'Cinta aislante de colores'],
            ['224', 'Cinta aislante Cobra'],
            ['225', 'Cinta aislante Temflex']
          ]
        },
        {
          nombre: 'Soldadura PVC y exotérmica',
          marcas: ['Tubison', 'Unisolder'],
          items: ['Soldadura PVC', 'Soldadura exotérmica'],
          fotos: [
            ['343', 'Soldadura PVC'],
            ['342', 'Soldadura PVC 1/4'],
            ['344', 'Soldadura exotérmica']
          ]
        }
      ]
    },
    {
      id: 'medidores',
      nombre: 'Medidores de energía',
      resumen: 'Medidores monofásicos, bifásicos, trifásicos, bidireccionales y activa-reactiva.',
      portada: '339',
      grupos: [
        {
          nombre: 'Medidores de energía',
          marcas: ['Inelca', 'Tecun', 'CDM', 'Nansen'],
          items: [
            'Medidores monofásicos',
            'Medidores bifásicos',
            'Medidores trifásicos',
            'Medidores bidireccionales',
            'Medidores activa-reactiva'
          ],
          fotos: [
            ['351', 'Medidor de energía monofásico'],
            ['339', 'Medidor de energía electrónico'],
            ['340', 'Medidor de energía con display'],
            ['341', 'Medidor de energía trifásico']
          ]
        }
      ]
    },
    {
      id: 'extractores-motores',
      nombre: 'Extractores y motores',
      resumen: 'Extractores industriales, de aire acondicionado y motores eléctricos de ½ a 5 HP.',
      portada: '215',
      grupos: [
        {
          nombre: 'Extractores industriales y motores eléctricos',
          marcas: ['EMI', 'Cheka'],
          items: [
            'Extractores desde 4” hasta 17”',
            'Extractor línea económica',
            'Extractor línea industrial media',
            'Extractor línea industrial pesada',
            'Extractor de aire acondicionado con y sin rejilla',
            'Motores eléctricos monofásicos y trifásicos desde ½ hasta 5 HP'
          ],
          fotos: [
            ['215', 'Extractor de aire'],
            ['216', 'Extractor con rejilla'],
            ['218', 'Motor eléctrico']
          ]
        }
      ]
    },
    {
      id: 'accesorios',
      nombre: 'Accesorios en general',
      resumen: 'Puesta a tierra, sensores, estabilizadores, timbres, multitomas y soportería.',
      portada: '366',
      grupos: [
        {
          nombre: 'Accesorios en general',
          marcas: ['Magom', 'Ultra Line', 'Exceline'],
          items: [
            'Pararrayos de cinco puntas',
            'Sensor de humo',
            'Sensor de movimiento',
            'Cuchilla doble tiro',
            'Timbre industrial, inalámbrico y chicharra',
            'Estabilizador y elevador',
            'Multitoma de 6 y 8 puestos',
            'Varilla copperweld en cobre de ½” y 5/8”, de 1.20 hasta 2.40 m',
            'Conector de cobre de ½” y 5/8”',
            'Hidrosolta',
            'Grapa channel',
            'Grapa galvanizada de una y dos alas',
            'Riel channel y omega'
          ],
          fotos: [
            ['366', 'Pararrayos de cinco puntas'],
            ['367', 'Sensor de humo'],
            ['368', 'Sensor de movimiento'],
            ['369', 'Cuchilla doble tiro'],
            ['370', 'Cuchilla'],
            ['372', 'Timbre industrial'],
            ['373', 'Timbre'],
            ['376', 'Timbre inalámbrico'],
            ['362', 'Estabilizador y elevador'],
            ['364', 'Regulador de voltaje'],
            ['365', 'Estabilizador'],
            ['371', 'Multitoma']
          ]
        }
      ]
    }
  ],

  /* Carrusel de productos destacados del inicio */
  destacados: [
    { linea: 'transformadores', foto: '146', nombre: 'Aisladores' },
    { linea: 'iluminacion', foto: '059', nombre: 'Reflectores LED' },
    { linea: 'maniobra-control', foto: '137', nombre: 'Contactores' },
    { linea: 'cables', foto: '162', nombre: 'Cable encauchetado' },
    { linea: 'iluminacion', foto: '084', nombre: 'Luminaria solar' },
    { linea: 'medidores', foto: '339', nombre: 'Medidores de energía' },
    { linea: 'cajas-tableros', foto: '122', nombre: 'Rack de comunicaciones' },
    { linea: 'accesorios', foto: '362', nombre: 'Estabilizadores' },
    { linea: 'extractores-motores', foto: '218', nombre: 'Motores eléctricos' }
  ],

  /* Tarjetas "línea + marcas" del inicio */
  marcasPorLinea: [
    { linea: 'cables', titulo: 'Cables - Alambres', marcas: 'Procables · Centelsa · Nexans', fotos: ['161', '199'] },
    { linea: 'cajas-tableros', titulo: 'Cajas - Tableros', marcas: 'Tercol · Legrand · Indelpa', fotos: ['110', '120'] },
    { linea: 'breakers', titulo: 'Breakers', marcas: 'Siemens · Schneider · Chint', fotos: ['133', '132'] },
    { linea: 'iluminacion', titulo: 'Iluminación LED', marcas: 'Sylvania · Philips · Mercury', fotos: ['016', '101'] }
  ],

  marcasLogos: [
    'sylvania', 'deko', 'munilux', 'karluz', 'lexmana', 'pavco', 'gerfor', 'colmena', 'plastimec',
    'tecnosa', 'ipac', '3m', 'grupo-electrico-colombiano', 'inelca', 'tecun', 'cdm', 'nansen',
    'ultraline', 'exceline', 'magom'
  ]
};
