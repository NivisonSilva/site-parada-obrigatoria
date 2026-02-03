export const CONTACT_INFO = {
  phoneNumber: "5581981985722",
  displayNumber: "(81) 98198-5722",
  menuLink: "http://easymenu.ct.ws/cardapio.php?restaurante_id=2",
  instagram: "https://www.instagram.com/parada.obrigatoriagaibu",
  address: "Gaibu - Cabo de Santo Agostinho/PE", 
  hours: "Seg - Sex: 17:00 às 01:00"
};

export const MESSAGES = {
  order: "Olá! Vim pelo site e gostaria de fazer um pedido no Parada Obrigatória 🍔",
  info: "Olá! Gostaria de mais informações sobre o cardápio e funcionamento.",
  reservation: "Olá! Gostaria de reservar uma mesa."
};

export const WHATSAPP_URL = (message: string) => {
  return `https://wa.me/${CONTACT_INFO.phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const checkIsOpen = () => {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Recife',
      weekday: 'short',
      hour: 'numeric',
      hour12: false
    });

    const parts = formatter.formatToParts(new Date());
    const weekday = parts.find(p => p.type === 'weekday')?.value;
    const hourStr = parts.find(p => p.type === 'hour')?.value;
    
    if (!weekday || !hourStr) return false;
    
    const hour = parseInt(hourStr, 10);
    
    // Logic: 17:00 - 01:00 (Next day)
    // Mon-Fri: Starts 17:00
    // Tue-Sat: Ends 01:00 (continuation of Mon-Fri)
    
    // Current day is Mon, Tue, Wed, Thu, Fri -> Open if hour >= 17
    if (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekday)) {
      if (hour >= 17) return true;
    }
    
    // Current day is Tue, Wed, Thu, Fri, Sat -> Open if hour < 1
    if (['Tue', 'Wed', 'Thu', 'Fri', 'Sat'].includes(weekday)) {
      if (hour < 1) return true;
    }
    
    return false;
  } catch (e) {
    console.error("Timezone check failed", e);
    return false; 
  }
};