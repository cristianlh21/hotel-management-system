/**
 * @fileoverview Configuración y exportación del cliente de Supabase.
 * Proporciona el punto de entrada para todas las interacciones con la base de datos PostgreSQL.
 * @version 1.0.0
 */

import { createClient } from "@supabase/supabase-js";

/** Url del proyecto de Supabase obtenida del entorno */
const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;

/** Clave de la API de Supabase obtenida del entorno */
const supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Cliente de Supabase inicializado y tipado de forma estricta.
 * Se utiliza para realizar operaciones CRUD en las tablas de habitaciones y tipos.
 * * @example
 * const { data, error } = await supabase.from('habitaciones').select('*');
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);