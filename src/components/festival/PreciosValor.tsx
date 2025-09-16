// 'use client'

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiCheck, FiGift, FiClock, FiMapPin, FiUsers, FiStar, FiTrendingUp } from 'react-icons/fi';

// interface PaqueteEntrada {
//     id: string;
//     nombre: string;
//     precio: number;
//     precioOriginal?: number;
//     descripcion: string;
//     disponibilidad: 'limitada' | 'disponible' | 'agotada';
//     incluye: string[];
//     beneficiosExtra: string[];
//     badge?: string;
//     color: string;
//     popular?: boolean;
// }

// const paquetes: PaqueteEntrada[] = [
//     {
//         id: 'early-bird',
//         nombre: 'Early Bird',
//         precio: 12000,
//         precioOriginal: 15000,
//         descripcion: 'Para los primeros 50 inscriptos. Precio especial hasta el 15 de septiembre.',
//         disponibilidad: 'limitada',
//         badge: 'Oferta limitada',
//         color: 'from-green-500 to-emerald-400',
//         incluye: [
//             'Entrada al festival (8 horas)',
//             'Kit oficial RC Club',
//             'Almuerzo saludable incluido',
//             'Acceso a todas las actividades',
//             'Plantita viva de regalo',
//             'Botella de agua reutilizable'
//         ],
//         beneficiosExtra: [
//             '20% de descuento',
//             'Kit exclusivo Early Bird',
//             'Acceso prioritario a actividades'
//         ]
//     },
//     {
//         id: 'general',
//         nombre: 'Entrada General',
//         precio: 15000,
//         descripcion: 'Tu entrada completa al Festival RC Club. Todo incluido para vivir la experiencia completa.',
//         disponibilidad: 'disponible',
//         color: 'from-red-500 to-orange-400',
//         popular: true,
//         incluye: [
//             'Entrada al festival (8 horas)',
//             'Kit oficial RC Club',
//             'Almuerzo saludable incluido',
//             'Acceso a todas las actividades',
//             'Plantita viva de regalo',
//             'Botella de agua reutilizable',
//             'Toalla RC personalizada',
//             'Snacks y bebida energética'
//         ],
//         beneficiosExtra: [
//             'Experiencia completa',
//             'Valor agregado garantizado',
//             'Sin restricciones'
//         ]
//     },
//     {
//         id: 'familiar',
//         nombre: 'Pack Familiar',
//         precio: 25000,
//         precioOriginal: 30000,
//         descripcion: 'Perfecto para familias. 2 entradas generales con beneficios adicionales para niños.',
//         disponibilidad: 'disponible',
//         badge: 'Mejor valor',
//         color: 'from-blue-500 to-purple-400',
//         incluye: [
//             '2 entradas completas al festival',
//             '2 kits oficiales RC Club',
//             'Almuerzo familiar incluido',
//             'Kit especial para niños',
//             'Actividades familiares exclusivas',
//             '2 plantitas + macetas decoradas',
//             'Zona familiar prioritaria'
//         ],
//         beneficiosExtra: [
//             'Ahorro de $5.000',
//             'Actividades kids premium',
//             'Área familiar exclusiva'
//         ]
//     }
// ];

// const valorTotal = {
//     actividades: 8000,
//     almuerzo: 4000,
//     kit: 3000,
//     instructor: 2500,
//     plantita: 1500,
//     total: 19000
// };

// export const PreciosValor = () => {
//     const [paqueteSeleccionado, setPaqueteSeleccionado] = useState('general');
//     const [mostrarDesglose, setMostrarDesglose] = useState(false);

//     const paqueteActivo = paquetes.find(p => p.id === paqueteSeleccionado) || paquetes[1];

//     return (
//         <section className="w-full max-w-7xl px-4 xl:px-0 py-12 lg:py-24">
//             {/* Header */}
//             <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="text-center mb-12 lg:mb-20"
//             >
//                 <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase leading-tight mb-6">
//                     <span className="text__outline">Invertí en</span>
//                     <br />
//                     <span className="text-red-500">tu bienestar</span>
//                 </h2>
//                 <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto">
//                     Cada entrada incluye mucho más de lo que imaginás. Una experiencia integral diseñada para transformar tu día.
//                 </p>
//             </motion.div>

//             {/* Selector de Paquetes - Mobile */}
//             <div className="lg:hidden mb-8">
//                 <select
//                     value={paqueteSeleccionado}
//                     onChange={(e) => setPaqueteSeleccionado(e.target.value)}
//                     className="w-full px-4 py-3 bg-neutral-700 rounded-lg border border-white/20 text-white font-semibold"
//                 >
//                     {paquetes.map((paquete) => (
//                         <option key={paquete.id} value={paquete.id}>
//                             {paquete.nombre} - ${paquete.precio.toLocaleString()}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             {/* Cards de Precio - Desktop */}
//             <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
//                 {paquetes.map((paquete, index) => (
//                     <motion.div
//                         key={paquete.id}
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.1 }}
//                         onClick={() => setPaqueteSeleccionado(paquete.id)}
//                         className={`relative bg-neutral-800 rounded-2xl border-2 cursor-pointer transition-all hover:scale-105 ${
//                             paqueteSeleccionado === paquete.id 
//                                 ? 'border-red-500 shadow-xl shadow-red-500/20' 
//                                 : 'border-white/10 hover:border-white/30'
//                         } ${paquete.popular ? 'transform scale-105' : ''}`}
//                     >
//                         {/* Badge */}
//                         {paquete.badge && (
//                             <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white font-bold text-sm bg-gradient-to-r ${paquete.color}`}>
//                                 {paquete.badge}
//                             </div>
//                         )}
                        
//                         {/* Popular Badge */}
//                         {paquete.popular && (
//                             <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
//                                 <FiStar className="text-white text-sm fill-current" />
//                             </div>
//                         )}

//                         <div className="p-6 lg:p-8">
//                             {/* Header */}
//                             <div className="text-center mb-6">
//                                 <h3 className="text-2xl font-highrise-bold mb-2">{paquete.nombre}</h3>
//                                 <div className="flex items-center justify-center gap-2">
//                                     {paquete.precioOriginal && (
//                                         <span className="text-white/50 line-through text-lg">
//                                             ${paquete.precioOriginal.toLocaleString()}
//                                         </span>
//                                     )}
//                                     <span className={`text-4xl font-bold bg-gradient-to-r ${paquete.color} bg-clip-text text-transparent`}>
//                                         ${paquete.precio.toLocaleString()}
//                                     </span>
//                                 </div>
//                                 <p className="text-white/70 text-sm mt-2">{paquete.descripcion}</p>
//                             </div>

//                             {/* Incluye */}
//                             <div className="mb-6">
//                                 <h4 className="font-bold mb-4 text-center">Incluye:</h4>
//                                 <ul className="space-y-2">
//                                     {paquete.incluye.slice(0, 4).map((item, i) => (
//                                         <li key={i} className="flex items-start gap-2 text-sm">
//                                             <FiCheck className="text-green-400 mt-1 shrink-0" />
//                                             <span>{item}</span>
//                                         </li>
//                                     ))}
//                                     {paquete.incluye.length > 4 && (
//                                         <li className="text-center text-red-400 text-sm">
//                                             +{paquete.incluye.length - 4} beneficios más
//                                         </li>
//                                     )}
//                                 </ul>
//                             </div>

//                             {/* Disponibilidad */}
//                             <div className="mb-4">
//                                 {paquete.disponibilidad === 'limitada' && (
//                                     <div className="flex items-center gap-2 text-orange-400 text-sm">
//                                         <FiClock className="text-sm" />
//                                         <span>¡Últimas entradas disponibles!</span>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Detalle del Paquete Seleccionado */}
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={paqueteActivo.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     className="bg-neutral-800 rounded-2xl p-6 lg:p-12 border border-white/10 mb-12"
//                 >
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//                         {/* Detalles */}
//                         <div>
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${paqueteActivo.color} flex items-center justify-center`}>
//                                     <FiGift className="text-white text-xl" />
//                                 </div>
//                                 <div>
//                                     <h3 className="text-2xl lg:text-4xl font-highrise-bold">{paqueteActivo.nombre}</h3>
//                                     <p className="text-white/70">{paqueteActivo.descripcion}</p>
//                                 </div>
//                             </div>

//                             <div className="space-y-4 mb-8">
//                                 <h4 className="text-xl font-bold uppercase tracking-wider">Todo incluido:</h4>
//                                 <div className="grid grid-cols-1 gap-2">
//                                     {paqueteActivo.incluye.map((item, index) => (
//                                         <motion.div
//                                             key={index}
//                                             initial={{ opacity: 0, x: -20 }}
//                                             animate={{ opacity: 1, x: 0 }}
//                                             transition={{ delay: index * 0.05 }}
//                                             className="flex items-center gap-3 p-3 bg-neutral-700/50 rounded-lg"
//                                         >
//                                             <FiCheck className="text-green-400 shrink-0" />
//                                             <span className="text-white/90">{item}</span>
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="space-y-3">
//                                 <h4 className="text-lg font-bold text-red-400 uppercase">Beneficios extra:</h4>
//                                 {paqueteActivo.beneficiosExtra.map((beneficio, index) => (
//                                     <div key={index} className="flex items-center gap-2">
//                                         <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${paqueteActivo.color}`} />
//                                         <span className="text-white/80 font-medium">{beneficio}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Desglose de Valor */}
//                         <div className="bg-neutral-700/50 rounded-xl p-6">
//                             <div className="flex items-center justify-between mb-6">
//                                 <h4 className="text-xl font-bold">Desglose de valor</h4>
//                                 <button
//                                     onClick={() => setMostrarDesglose(!mostrarDesglose)}
//                                     className="text-red-400 hover:text-red-300 transition-colors"
//                                 >
//                                     <FiTrendingUp className="text-xl" />
//                                 </button>
//                             </div>

//                             <AnimatePresence>
//                                 {mostrarDesglose && (
//                                     <motion.div
//                                         initial={{ opacity: 0, height: 0 }}
//                                         animate={{ opacity: 1, height: 'auto' }}
//                                         exit={{ opacity: 0, height: 0 }}
//                                         className="space-y-4 mb-6"
//                                     >
//                                         <div className="flex justify-between items-center text-sm">
//                                             <span>8 horas de actividades</span>
//                                             <span>${valorTotal.actividades.toLocaleString()}</span>
//                                         </div>
//                                         <div className="flex justify-between items-center text-sm">
//                                             <span>Almuerzo + bebidas</span>
//                                             <span>${valorTotal.almuerzo.toLocaleString()}</span>
//                                         </div>
//                                         <div className="flex justify-between items-center text-sm">
//                                             <span>Kit completo RC</span>
//                                             <span>${valorTotal.kit.toLocaleString()}</span>
//                                         </div>
//                                         <div className="flex justify-between items-center text-sm">
//                                             <span>Instructores especializados</span>
//                                             <span>${valorTotal.instructor.toLocaleString()}</span>
//                                         </div>
//                                         <div className="flex justify-between items-center text-sm">
//                                             <span>Plantita + maceta</span>
//                                             <span>${valorTotal.plantita.toLocaleString()}</span>
//                                         </div>
//                                         <div className="border-t border-white/20 pt-4">
//                                             <div className="flex justify-between items-center font-bold">
//                                                 <span>Valor total:</span>
//                                                 <span>${valorTotal.total.toLocaleString()}</span>
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>

//                             <div className="text-center">
//                                 <div className="text-3xl font-bold text-red-500 mb-2">
//                                     Tu inversión: ${paqueteActivo.precio.toLocaleString()}
//                                 </div>
//                                 <div className="text-green-400 font-semibold">
//                                     Ahorro: ${(valorTotal.total - paqueteActivo.precio).toLocaleString()} 
//                                     <span className="text-sm ml-1">
//                                         ({Math.round(((valorTotal.total - paqueteActivo.precio) / valorTotal.total) * 100)}% off)
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* CTA Final */}
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//             >
//                 <div className="p-8 lg:p-12 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-2xl border border-red-500/30">