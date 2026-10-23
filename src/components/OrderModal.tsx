import React, { useState, useEffect } from 'react';
import { Dish, DISHES } from '../data/dishes';
import { generateWhatsAppLink, buildOrderMessage, OrderData } from '../utils/whatsapp';
import { BRAND_CONFIG } from '../data/config';
import { X, MessageCircle, Calendar, MapPin, User, Phone, Plus, Minus, FileText, CheckCircle, ShieldCheck, Clock } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDish?: Dish | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, initialDish }) => {
  const [selectedDishName, setSelectedDishName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Almoço (12h - 14h)');
  const [deliveryLocation, setDeliveryLocation] = useState<string>('Luanda');
  const [notes, setNotes] = useState<string>('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPreview, setShowPreview] = useState<boolean>(false);

  // Set default minimum date to today or tomorrow
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (initialDish) {
      setSelectedDishName(initialDish.name);
    } else if (DISHES.length > 0) {
      setSelectedDishName(DISHES[0].name);
    }
  }, [initialDish, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const orderData: OrderData = {
    dishName: selectedDishName,
    quantity,
    deliveryDate,
    preferredTime,
    customerName,
    phone,
    deliveryLocation,
    notes
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!selectedDishName.trim()) {
      newErrors.dish = 'Selecione um prato para a sua encomenda';
    }
    if (!customerName.trim()) {
      newErrors.name = 'Por favor, informe o seu nome completo';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Por favor, informe o seu número de telefone/WhatsApp';
    } else if (phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Insira um número de telefone válido';
    }
    if (!deliveryDate.trim()) {
      newErrors.date = 'Por favor, escolha a data pretendida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Gera o link oficial do WhatsApp e abre
    const whatsappUrl = generateWhatsAppLink(orderData);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[94vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-neutral-900 to-[#221619] p-5 sm:p-6 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D81B60] flex items-center justify-center text-white shadow-md">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                Faça a sua encomenda
              </h2>
              <p className="text-xs text-pink-200">
                Diretamente para o WhatsApp da Indira • {BRAND_CONFIG.whatsappFormatted}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-5">
          
          {/* Dish Selection */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider">
              Prato Selecionado *
            </label>
            <select
              value={selectedDishName}
              onChange={(e) => setSelectedDishName(e.target.value)}
              className="w-full px-4 py-3 bg-[#FFF9F6] border border-neutral-200 rounded-xl font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#D81B60] focus:border-transparent transition-all"
            >
              {DISHES.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name} — {d.price}
                </option>
              ))}
              <option value="Outro / Encomenda personalizada">
                Outro / Encomenda personalizada ou Buffet
              </option>
            </select>
            {errors.dish && <p className="text-xs text-rose-600">{errors.dish}</p>}
          </div>

          {/* Quantity Counter */}
          <div className="flex items-center justify-between p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80">
            <div>
              <span className="block text-xs font-bold text-neutral-800 uppercase tracking-wider">
                Quantidade de doses / porções *
              </span>
              <span className="text-xs text-neutral-500">
                Indique a quantidade pretendida
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 rounded-lg bg-white border border-neutral-300 text-neutral-700 flex items-center justify-center hover:bg-neutral-100 active:scale-95 transition-all cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg font-bold text-neutral-900 w-8 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 rounded-lg bg-[#D81B60] text-white flex items-center justify-center hover:bg-[#C2185B] active:scale-95 transition-all cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Two Columns: Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider">
                Nome Completo *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Ex: Maria António"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D81B60] transition-all ${
                    errors.name ? 'border-rose-500 bg-rose-50/20' : 'border-neutral-200'
                  }`}
                />
              </div>
              {errors.name && <p className="text-xs text-rose-600">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider">
                Número de Telefone / WhatsApp *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  placeholder="Ex: 923 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D81B60] transition-all ${
                    errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-neutral-200'
                  }`}
                />
              </div>
              {errors.phone && <p className="text-xs text-rose-600">{errors.phone}</p>}
            </div>

          </div>

          {/* Two Columns: Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider">
                Data Pretendida *
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="date"
                  min={todayStr}
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D81B60] transition-all ${
                    errors.date ? 'border-rose-500 bg-rose-50/20' : 'border-neutral-200'
                  }`}
                />
              </div>
              {errors.date && <p className="text-xs text-rose-600">{errors.date}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider">
                Período Preferido
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D81B60] transition-all"
                >
                  <option value="Almoço (12h - 14h)">Almoço (12h - 14h)</option>
                  <option value="Tarde (15h - 18h)">Tarde (15h - 18h)</option>
                  <option value="Jantar (19h - 21h)">Jantar (19h - 21h)</option>
                  <option value="A combinar com a chef">A combinar com a chef</option>
                </select>
              </div>
            </div>

          </div>

          {/* Delivery Location */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider">
              Local de Entrega / Evento (Opcional)
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Ex: Luanda - Talatona, Maianga, Kilamba, etc."
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D81B60] transition-all"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider">
              Observações (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: sem picante, preferência de tempero, acompanhamentos extras, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D81B60] transition-all resize-none"
            />
          </div>

          {/* Live Message Preview Toggle */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="text-xs font-semibold text-neutral-600 hover:text-[#D81B60] flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{showPreview ? 'Ocultar pré-visualização da mensagem' : 'Ver pré-visualização da mensagem do WhatsApp'}</span>
            </button>

            {showPreview && (
              <div className="mt-2.5 p-3.5 bg-neutral-900 text-neutral-200 rounded-xl text-xs font-mono whitespace-pre-wrap leading-relaxed border border-neutral-800">
                {buildOrderMessage(orderData)}
              </div>
            )}
          </div>

          {/* Privacy Note */}
          <div className="flex items-center gap-2 p-3 bg-neutral-50 rounded-xl border border-neutral-100 text-[11px] text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-[#D81B60] shrink-0" />
            <p>
              As informações fornecidas serão utilizadas apenas para processar o seu pedido.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#D81B60] hover:bg-[#C2185B] text-white py-3.5 px-6 rounded-xl font-bold text-base shadow-lg shadow-[#D81B60]/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enviar encomenda pelo WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-neutral-400 mt-2">
              Ao clicar, uma conversa será aberta automaticamente no seu WhatsApp com todos os dados preenchidos.
            </p>
          </div>

        </form>

      </div>
    </div>
  );
};
