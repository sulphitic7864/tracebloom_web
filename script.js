const DATA = {"records":[{"product_name":"Premium Organic Assam Tea","origin":"Dibrugarh, Assam, India","batch_code":"TB-TEA-001","current_stage":"Delivery","quality_status":"Certified Premium - ISO 22000","delivery_status":"Delivered to Mumbai Hub","route":"Dibrugarh \u2192 Guwahati \u2192 Kolkata \u2192 Mumbai","coordinates":{"x":75,"y":30},"stages":[{"name":"Origin","date":"12 Jan 2026","location":"Dibrugarh, Assam","detail":"Hand-picked leaves from partner tea gardens."},{"name":"Production","date":"14 Jan 2026","location":"Guwahati Processing Unit","detail":"Withered, rolled, oxidized, and dried in controlled conditions."},{"name":"Quality Check","date":"16 Jan 2026","location":"Kolkata QA Lab","detail":"Aroma, moisture, and residue checks cleared."},{"name":"Packaging","date":"18 Jan 2026","location":"Kolkata Pack House","detail":"Packed in recyclable aroma-lock pouches."},{"name":"Delivery","date":"21 Jan 2026","location":"Mumbai Hub","detail":"Delivered to premium retail distribution hub."}]},{"product_name":"Artisanal Kashmiri Saffron","origin":"Pampore, Jammu & Kashmir, India","batch_code":"TB-SAF-002","current_stage":"Quality Check","quality_status":"Purity Grade 1 Passed","delivery_status":"In transit to Delhi Sorting Facility","route":"Pampore \u2192 Srinagar \u2192 Delhi","coordinates":{"x":31,"y":13},"stages":[{"name":"Origin","date":"03 Feb 2026","location":"Pampore, J&K","detail":"Saffron strands sourced from registered growers."},{"name":"Production","date":"04 Feb 2026","location":"Srinagar Drying Room","detail":"Low-temperature drying preserved color and aroma."},{"name":"Quality Check","date":"06 Feb 2026","location":"Delhi QA Lab","detail":"Purity and color-strength validation completed."},{"name":"Packaging","date":"Pending","location":"Delhi Pack House","detail":"Glass vial packing scheduled."},{"name":"Delivery","date":"Pending","location":"Bengaluru Destination Hub","detail":"Shipment will move after final packing."}]},{"product_name":"Organic Cotton Home Linen","origin":"Kutch, Gujarat, India","batch_code":"TB-COT-003","current_stage":"Packaging","quality_status":"Azo-free dye check passed","delivery_status":"Packed for Pune dispatch","route":"Kutch \u2192 Ahmedabad \u2192 Pune","coordinates":{"x":31,"y":45},"stages":[{"name":"Origin","date":"10 Mar 2026","location":"Kutch, Gujarat","detail":"Organic cotton procured from cooperative farms."},{"name":"Production","date":"14 Mar 2026","location":"Ahmedabad Textile Unit","detail":"Spun, woven, and finished with low-impact dyes."},{"name":"Quality Check","date":"17 Mar 2026","location":"Ahmedabad QA Desk","detail":"Shrinkage and color-fastness tests passed."},{"name":"Packaging","date":"19 Mar 2026","location":"Ahmedabad Pack House","detail":"Folded in compostable sleeves."},{"name":"Delivery","date":"Pending","location":"Pune Hub","detail":"Scheduled for surface movement."}]},{"product_name":"Kerala Spice Gift Box","origin":"Idukki, Kerala, India","batch_code":"TB-SPC-004","current_stage":"Production","quality_status":"Batch cleaning in progress","delivery_status":"Awaiting QA release","route":"Idukki \u2192 Kochi \u2192 Hyderabad","coordinates":{"x":43,"y":82},"stages":[{"name":"Origin","date":"08 Apr 2026","location":"Idukki, Kerala","detail":"Cardamom, pepper, and clove lots selected."},{"name":"Production","date":"10 Apr 2026","location":"Kochi Processing Centre","detail":"Sorting, cleaning, and small-batch blending underway."},{"name":"Quality Check","date":"Pending","location":"Kochi QA Lab","detail":"Oil-content and purity checks scheduled."},{"name":"Packaging","date":"Pending","location":"Kochi Pack House","detail":"Gift box assembly pending QA release."},{"name":"Delivery","date":"Pending","location":"Hyderabad Hub","detail":"Delivery route planned."}]},{"product_name":"Himachal Wildflower Honey","origin":"Kangra, Himachal Pradesh, India","batch_code":"TB-HNY-005","current_stage":"Delivery","quality_status":"NMR authenticity check passed","delivery_status":"Out for delivery in Chandigarh","route":"Kangra \u2192 Chandigarh","coordinates":{"x":38,"y":20},"stages":[{"name":"Origin","date":"21 May 2026","location":"Kangra, HP","detail":"Honey collected from partner apiaries."},{"name":"Production","date":"22 May 2026","location":"Kangra Filtering Unit","detail":"Cold filtered without heat damage."},{"name":"Quality Check","date":"24 May 2026","location":"Chandigarh QA Lab","detail":"Moisture and authenticity checks passed."},{"name":"Packaging","date":"25 May 2026","location":"Chandigarh Pack House","detail":"Packed in glass jars with tamper seal."},{"name":"Delivery","date":"26 May 2026","location":"Chandigarh","detail":"Out for final customer handoff."}]},{"product_name":"Coorg Single-Origin Coffee","origin":"Kodagu, Karnataka, India","batch_code":"TB-COF-006","current_stage":"Packaging","quality_status":"Roast profile approved","delivery_status":"Packed for Chennai shipment","route":"Kodagu \u2192 Bengaluru \u2192 Chennai","coordinates":{"x":41,"y":74},"stages":[{"name":"Origin","date":"11 Jun 2026","location":"Kodagu, Karnataka","detail":"Arabica cherries harvested from shade-grown estate."},{"name":"Production","date":"14 Jun 2026","location":"Bengaluru Roastery","detail":"Medium roast completed in small batches."},{"name":"Quality Check","date":"15 Jun 2026","location":"Bengaluru Cupping Room","detail":"Cupping score and roast profile approved."},{"name":"Packaging","date":"16 Jun 2026","location":"Bengaluru Pack House","detail":"Nitrogen-flushed valve bags sealed."},{"name":"Delivery","date":"Pending","location":"Chennai Hub","detail":"Dispatch waiting for pickup scan."}]},{"product_name":"Rajasthan Blue Pottery Bowl","origin":"Jaipur, Rajasthan, India","batch_code":"TB-ART-007","current_stage":"Quality Check","quality_status":"Glaze inspection underway","delivery_status":"Awaiting protective packing","route":"Jaipur \u2192 Delhi \u2192 Kolkata","coordinates":{"x":34,"y":36},"stages":[{"name":"Origin","date":"09 Jul 2026","location":"Jaipur, Rajasthan","detail":"Handcrafted by artisan cluster."},{"name":"Production","date":"15 Jul 2026","location":"Jaipur Studio Kiln","detail":"Painted and kiln-fired in small lots."},{"name":"Quality Check","date":"17 Jul 2026","location":"Jaipur QC Table","detail":"Surface, glaze, and shape inspection underway."},{"name":"Packaging","date":"Pending","location":"Delhi Fragile Pack Unit","detail":"Honeycomb paper and double-box packing scheduled."},{"name":"Delivery","date":"Pending","location":"Kolkata Hub","detail":"Fragile shipment route reserved."}]},{"product_name":"Tamil Nadu Handloom Silk Stole","origin":"Kanchipuram, Tamil Nadu, India","batch_code":"TB-SLK-008","current_stage":"Delivery","quality_status":"Weave and zari check passed","delivery_status":"Delivered to Bengaluru flagship store","route":"Kanchipuram \u2192 Chennai \u2192 Bengaluru","coordinates":{"x":45,"y":83},"stages":[{"name":"Origin","date":"02 Aug 2026","location":"Kanchipuram, TN","detail":"Silk yarn sourced from verified weaving families."},{"name":"Production","date":"09 Aug 2026","location":"Kanchipuram Loom House","detail":"Handloom weaving completed."},{"name":"Quality Check","date":"11 Aug 2026","location":"Chennai Textile QA","detail":"Weave consistency and zari finish approved."},{"name":"Packaging","date":"12 Aug 2026","location":"Chennai Pack House","detail":"Packed in premium archival sleeve."},{"name":"Delivery","date":"14 Aug 2026","location":"Bengaluru Store","detail":"Delivered to flagship store inventory."}]}]};

const stageMeta = [
  {label:'Sourcing & Origin', icon:'leaf', photo:'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=500&q=80'},
  {label:'Production & Processing', icon:'factory', photo:'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80'},
  {label:'Quality Verification', icon:'shield', photo:'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=500&q=80'},
  {label:'Packaging & Branding', icon:'box', photo:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80'},
  {label:'Delivery & Confidence', icon:'truck', photo:'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=500&q=80'}
];
const iconSvg={
 leaf:`<svg viewBox="0 0 32 32"><path d="M16 27V13M16 19c-5 0-9-4-9-9 5 0 9 4 9 9Zm0-3c0-6 4-10 10-10 0 6-4 10-10 10Z"/><path d="M11 27h10"/></svg>`,
 factory:`<svg viewBox="0 0 32 32"><path d="M4 27V13l8 4v-6l8 4V8h5v19Z"/><path d="M4 27h24M8 21h3M15 21h3M22 21h3"/></svg>`,
 shield:`<svg viewBox="0 0 32 32"><path d="M16 3 27 7v8c0 7-4.8 11.6-11 14-6.2-2.4-11-7-11-14V7Z"/><path d="m10 16 4 4 8-9"/></svg>`,
 box:`<svg viewBox="0 0 32 32"><path d="M5 9h22v18H5Z"/><path d="M8 4h16l3 5H5Z"/><path d="M11 15h10"/></svg>`,
 truck:`<svg viewBox="0 0 32 32"><path d="M3 7h17v15H3Z"/><path d="M20 12h5l4 5v5h-9Z"/><circle cx="9" cy="24" r="3"/><circle cx="24" cy="24" r="3"/></svg>`
};
const records=DATA.records;
let current=records[0], activeStage=1;
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const GEO = {
 'TB-TEA-001': {origin:[27.4728,94.9120], route:[[27.4728,94.9120],[26.1445,91.7362],[22.5726,88.3639],[19.0760,72.8777]]},
 'TB-SAF-002': {origin:[34.0024,74.9183], route:[[34.0024,74.9183],[34.0837,74.7973],[28.6139,77.2090]]},
 'TB-COT-003': {origin:[23.7337,69.8597], route:[[23.7337,69.8597],[23.0225,72.5714],[18.5204,73.8567]]},
 'TB-SPC-004': {origin:[9.8494,76.9720], route:[[9.8494,76.9720],[9.9312,76.2673],[17.3850,78.4867]]},
 'TB-HNY-005': {origin:[32.0998,76.2691], route:[[32.0998,76.2691],[30.7333,76.7794]]},
 'TB-COF-006': {origin:[12.3375,75.8069], route:[[12.3375,75.8069],[12.9716,77.5946],[13.0827,80.2707]]},
 'TB-ART-007': {origin:[26.9124,75.7873], route:[[26.9124,75.7873],[28.6139,77.2090],[22.5726,88.3639]]},
 'TB-SLK-008': {origin:[12.8342,79.7036], route:[[12.8342,79.7036],[13.0827,80.2707],[12.9716,77.5946]]}
};
let indiaMap, markerLayer, routeLayer;
function initRealMap(){
 if(indiaMap || typeof L==='undefined') return;
 indiaMap=L.map('indiaRealMap',{
   zoomControl:true,
   scrollWheelZoom:false,
   minZoom:5,
   maxZoom:9,
   zoomSnap:0.25,
   zoomDelta:0.5,
   attributionControl:true,
   maxBounds:[[5.0,64.0],[38.5,99.5]],
   maxBoundsViscosity:0.9
 }).setView([22.7,79.2],4.75);

 // Dark, detailed basemap closely matching the supplied reference.
 L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',{
   subdomains:'abcd',
   maxZoom:19,
   detectRetina:true,
   attribution:'&copy; OpenStreetMap contributors &copy; CARTO'
 }).addTo(indiaMap);
 L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png',{
   subdomains:'abcd',
   maxZoom:19,
   detectRetina:true,
   pane:'overlayPane',
   opacity:0.72
 }).addTo(indiaMap);
 markerLayer=L.layerGroup().addTo(indiaMap);
 routeLayer=L.layerGroup().addTo(indiaMap);
 setTimeout(()=>indiaMap.invalidateSize(),120);
}
function markerIcon(active=false,hub=false){
 return L.divIcon({className:'',html:`<div class="${hub?'trace-hub':'trace-marker'}${active?' is-active':''}"></div>`,iconSize:[24,24],iconAnchor:[12,12],popupAnchor:[0,-12]});
}
function renderMap(){
 initRealMap();
 if(!indiaMap) return;
 markerLayer.clearLayers(); routeLayer.clearLayers();
 records.forEach(r=>{
   const geo=GEO[r.batch_code]; if(!geo) return;
   const m=L.marker(geo.origin,{icon:markerIcon(r.batch_code===current.batch_code)}).addTo(markerLayer);
   m.bindTooltip(r.origin.split(',')[0],{direction:'right',offset:[10,0],opacity:.9});
   m.bindPopup(`<h3>${esc(r.product_name)}</h3><p><strong>${esc(r.batch_code)}</strong></p><p>Origin: ${esc(r.origin)}</p><p>${esc(r.quality_status)}</p>`,{className:'trace-popup'});
   m.on('click',()=>{current=r;activeStage=Math.max(0,r.stages.findIndex(s=>s.name.toLowerCase().includes(r.current_stage.toLowerCase().split(' ')[0])));renderMap();renderTimeline();});
 });
 const geo=GEO[current.batch_code];
 if(geo){
   L.polyline(geo.route,{color:'#e6bd78',weight:3,opacity:.85,dashArray:'8 9'}).addTo(routeLayer);
   geo.route.slice(1).forEach((pt,i)=>L.circleMarker(pt,{radius:i===geo.route.length-2?7:5,color:'#ffe4ad',weight:2,fillColor:'#a97749',fillOpacity:.9}).addTo(routeLayer));
   const bounds=L.latLngBounds(geo.route);
   indiaMap.fitBounds(bounds.pad(.9),{animate:true,maxZoom:5.75,padding:[36,36]});
 }
 const label=$('#mapSelectionLabel'); if(label) label.textContent=current.product_name;
}

function renderTimeline(){
 $('#journeyTitle').textContent=current.product_name;
 $('#journeySub').textContent=`${current.route} • ${current.delivery_status}`;
 $('#heroBatch').textContent=current.batch_code; $('#heroProduct').textContent=current.product_name;
 $('#traceCode').value=current.batch_code; $('#journeyCode').value=current.batch_code;
 const activeIndex=Math.max(0,current.stages.findIndex(s=>s.name.toLowerCase().includes(current.current_stage.toLowerCase().split(' ')[0])));
 const el=$('#timeline');
 el.innerHTML=current.stages.map((s,i)=>`<article class="stage ${i===activeStage?'active':''}" data-index="${i}">
   <div class="stage-head"><div class="stage-icon">${iconSvg[stageMeta[i].icon]}</div><div class="stage-title">${i+1}. ${stageMeta[i].label}</div></div>
   <span class="stage-node"></span>
   <div class="stage-body"><div class="stage-date">${esc(s.date)}</div><div class="stage-content"><p><span class="stage-location">${esc(s.location)}</span>${esc(s.detail)}</p><img class="stage-thumb" src="${stageMeta[i].photo}" alt="${esc(stageMeta[i].label)}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&q=80'"></div></div>
 </article>`).join('');
 el.querySelectorAll('.stage').forEach(n=>n.addEventListener('click',()=>{activeStage=+n.dataset.index;renderTimeline()}));
 renderDetail();
}
function renderDetail(){
 const s=current.stages[activeStage], m=stageMeta[activeStage];
 $('#stageDetail').innerHTML=`<div><h3>${activeStage+1}. ${esc(m.label)}</h3><p><strong>${esc(s.location)}</strong> — ${esc(s.detail)} This verified checkpoint is connected to batch ${esc(current.batch_code)} and the status “${esc(current.quality_status)}”.</p></div><div class="process-cards"><div class="process-card"><img src="${m.photo}" alt="${esc(m.label)}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&q=80'"><div><strong>VERIFIED FACILITY</strong><span>${esc(s.location)}</span></div></div><div class="process-card"><img src="${stageMeta[Math.min(4,activeStage+1)].photo}" alt="Process record" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&q=80'"><div><strong>PROCESS RECORD</strong><span>${esc(s.date)} • TraceBloom verified</span></div></div></div>`;
}
function selectRecord(r){current=r; activeStage=Math.max(0,r.stages.findIndex(s=>s.name.toLowerCase().includes(r.current_stage.toLowerCase().split(' ')[0])));renderMap();renderTimeline();document.querySelector('#journey').scrollIntoView({behavior:'smooth'});}
function lookup(value,{silent=false}={}){
 const code=value.trim().toUpperCase();
 const r=records.find(x=>x.batch_code.toUpperCase()===code);
 if(r){
   if(r.batch_code!==current.batch_code) selectRecord(r);
   else renderTimeline();
   return true;
 }
 if(!silent) alert('Code not found. Try TB-TEA-001, TB-SAF-002, TB-COT-003 or TB-SPC-004.');
 return false;
}
function handleCodeInput(event){
 const input=event.target;
 const code=input.value.trim().toUpperCase();
 input.value=code;
 const other=input.id==='traceCode' ? $('#journeyCode') : $('#traceCode');
 if(other) other.value=code;
 // Update automatically as soon as a complete valid code has been entered.
 if(records.some(r=>r.batch_code.toUpperCase()===code)) lookup(code,{silent:true});
}
$('#lookupBtn').addEventListener('click',()=>lookup($('#traceCode').value));
$('#traceCode').addEventListener('input',handleCodeInput);
$('#journeyCode').addEventListener('input',handleCodeInput);
$('#traceCode').addEventListener('keydown',e=>{if(e.key==='Enter')lookup(e.target.value)});
$('#journeyCode').addEventListener('keydown',e=>{if(e.key==='Enter')lookup(e.target.value)});
$('#traceCode').addEventListener('change',e=>lookup(e.target.value));
$('#journeyCode').addEventListener('change',e=>lookup(e.target.value));
$('#contactForm').addEventListener('submit',e=>{e.preventDefault();$('#toast').textContent='Thanks — your inquiry has been captured for this demo.';e.target.reset()});
renderMap();renderTimeline();
