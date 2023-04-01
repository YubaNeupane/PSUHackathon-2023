import React from "react";

export default function SideBarIcon({ icon, text = "tooltip 💡" }) {
  return (
    <div className="sidebar-icon group justify-center items-center">
      <img src={icon} alt={text} className="w-full h-full object-cover" />
      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}
