/**
 * Utilitário para geração de link oficial do WhatsApp
 * Constrói a mensagem estruturada com todos os dados preenchidos pelo cliente
 */

import { BRAND_CONFIG } from '../data/config';

export interface OrderData {
  dishName: string;
  quantity: number;
  deliveryDate: string;
  preferredTime?: string;
  customerName: string;
  phone: string;
  deliveryLocation: string;
  notes?: string;
}

/**
 * Cria a mensagem de encomenda formatada para envio ao WhatsApp
 */
export function buildOrderMessage(order: OrderData): string {
  const parts: string[] = [
    `Olá, Indira! Gostaria de fazer uma encomenda.\n`,
    `🍽️ *Prato:* ${order.dishName || "A definir"}`,
    `📦 *Quantidade:* ${order.quantity}`,
    `📅 *Data pretendida:* ${order.deliveryDate || "A combinar"}`
  ];

  if (order.preferredTime && order.preferredTime.trim() !== '') {
    parts.push(`⏰ *Horário aproximado:* ${order.preferredTime}`);
  }

  parts.push(`👤 *Nome:* ${order.customerName}`);
  parts.push(`📱 *Telefone:* ${order.phone}`);

  if (order.deliveryLocation && order.deliveryLocation.trim() !== '') {
    parts.push(`📍 *Local de entrega/evento:* ${order.deliveryLocation}`);
  }

  if (order.notes && order.notes.trim() !== '') {
    parts.push(`📝 *Observações:* ${order.notes}`);
  }

  parts.push(`\n_Enviado através do website A Curiosa na Cozinha._`);

  return parts.join('\n');
}

/**
 * Gera o link direto wa.me com a mensagem codificada
 */
export function generateWhatsAppLink(order: OrderData): string {
  const message = buildOrderMessage(order);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodedText}`;
}

/**
 * Gera link rápido para conversa geral no WhatsApp (sem prato específico)
 */
export function getGeneralWhatsAppLink(customPrompt?: string): string {
  const message = customPrompt || "Olá, Indira! Gostaria de tirar uma dúvida sobre pratos e encomendas da A Curiosa na Cozinha.";
  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
