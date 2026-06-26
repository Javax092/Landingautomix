const DEFAULT_WHATSAPP_NUMBER = "5592993020974";

export const brenoWhatsappNumber =
  process.env.NEXT_PUBLIC_BRENO_WHATSAPP ?? DEFAULT_WHATSAPP_NUMBER;

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${brenoWhatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type ConciergeLead = {
  name: string;
  phone: string;
  profile: string;
  budget: string;
  priority: string;
};

export function buildConciergeMessage(lead: ConciergeLead) {
  return [
    "Ola Breno, quero uma curadoria automotiva premium.",
    "",
    `Nome: ${lead.name}`,
    `WhatsApp: ${lead.phone}`,
    `Perfil: ${lead.profile}`,
    `Faixa de investimento: ${lead.budget}`,
    `Prioridade: ${lead.priority}`,
    "",
    "Pode me enviar as 2 opcoes mais alinhadas ao meu perfil?",
    "Tambem pode me avisar quando aparecer uma oportunidade parecida.",
  ].join("\n");
}

export function buildVehicleInterestMessage(brand: string, model: string) {
  return [
    "Olá Breno.",
    "",
    `Analisei o ${brand} ${model} no site e gostaria de receber uma consultoria personalizada.`,
    "",
    "Tenho interesse em:",
    "",
    "• Disponibilidade",
    "• Condições comerciais",
    "• Avaliação do meu usado",
    "• Opções semelhantes ao mesmo perfil",
    "",
    "Podemos conversar?",
  ].join("\n");
}

export type VipLead = {
  name: string;
  phone: string;
  profile: string;
  budget: string;
};

export function buildVipMessage(lead: VipLead) {
  return [
    "Ola Breno, quero entrar na Lista VIP.",
    "",
    `Nome: ${lead.name}`,
    `WhatsApp: ${lead.phone}`,
    `Perfil desejado: ${lead.profile}`,
    `Faixa de investimento: ${lead.budget}`,
    "",
    "Pode me avisar quando aparecer uma oportunidade alinhada ao meu perfil?",
  ].join("\n");
}
