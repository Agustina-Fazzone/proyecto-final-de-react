# 💬 Aplicación de Chat: Análisis Funcional

Esta aplicación actúa como una plataforma de comunicación digital que facilita el intercambio de mensajes en tiempo real y gestiona la persistencia de las interacciones y los datos de usuario.

---

## 💾 Persistencia y Almacenamiento de Datos

La funcionalidad central del sistema es garantizar que la información se mantenga intacta entre sesiones. Esto se logra mediante la persistencia de:

* **Contactos (Usuarios):** Almacenamiento y recuperación de la lista de usuarios con los que se han iniciado conversaciones.
* **Historial de Conversaciones:** Registro cronológico de todos los **mensajes** enviados y recibidos, manteniendo la integridad de las interacciones pasadas.

---

## 🎯 Módulos de la Interfaz de Usuario (UI)

La aplicación está segmentada en cuatro componentes clave que dirigen la experiencia del usuario y las funcionalidades del sistema:

### 🎫 Autenticación (`Login`)

* **Propósito:** Proteger el acceso y verificar la identidad del usuario.
* **Mecanismo:** Requiere la validación de **credenciales** (nombre de usuario y contraseña) para iniciar una sesión privada en la plataforma.

### 📜 Lista de Contactos (`Sidebar`)

* **Propósito:** Navegación y selección de la conversación deseada.
* **Mecanismo:** Muestra una lista dinámica de **contactos**. Al seleccionar uno, se carga el historial de mensajes correspondiente en el módulo principal.

### 💬 Chat Principal (Interacción)

* **Propósito:** Envío y recepción de mensajes en tiempo real.
* **Mecanismo:** Incluye un área para la **composición del mensaje** y un control de **envío** ($\rightarrow$). Los mensajes se visualizan secuencialmente en el *thread* de conversación.

### ⚙️ Configuración (`Settings`)

* **Propósito:** Personalización de la experiencia y la interfaz.
* **Opciones Disponibles:**
    * **Idioma:** Alterna el idioma de la interfaz (p. ej., Español / Inglés).
    * **Ahorro de Energía:** Activa un modo visual de baja luminosidad (**Dark Mode**) optimizando la eficiencia energética y la ergonomía visual.

---
