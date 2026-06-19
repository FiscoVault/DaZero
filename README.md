# 🍕 DA ZERO Pizzeria - Carrousel Gallery

Carrousel interactif moderne pour afficher les images de **DA ZERO Pizzeria** à Laval, Québec.

---

## ✨ Caractéristiques

✅ **Carrousel responsive** - Fonctionne sur desktop, tablette et mobile  
✅ **Navigation intuitive** - Boutons précédent/suivant + indicateurs (points)  
✅ **Auto-rotation** - Change d'image tous les 5 secondes  
✅ **Design moderne** - Thème doré/noir aux couleurs de DA ZERO  
✅ **Performance optimisée** - CSS et JS séparés  
✅ **Facile à déployer** - Prêt pour GitHub Pages  

---

## 📁 Structure du projet

```
dazero-carousel/
├── index.html          # Fichier principal
├── css/
│   └── style.css      # Styles du carrousel
├── js/
│   └── carousel.js    # Logique du carrousel
├── images/
│   ├── image1.jpg     # Votre image 1
│   ├── image2.jpg     # Votre image 2
│   ├── image3.jpg     # Votre image 3
│   └── image4.jpg     # Votre image 4
├── README.md          # Ce fichier
└── .gitignore         # Fichiers à ignorer
```

---

## 🚀 Installation

### 1️⃣ Clonez le projet

```bash
git clone https://github.com/votre-username/dazero-carousel.git
cd dazero-carousel
```

### 2️⃣ Ajoutez vos images

Placez vos 4 images dans le dossier `images/`:
- `image1.jpg`
- `image2.jpg`
- `image3.jpg`
- `image4.jpg`

### 3️⃣ Ouvrez le carrousel

Double-cliquez sur `index.html` ou déployez sur GitHub Pages.

---

## 💻 Utilisation locale

```bash
# Ouvrez simplement le fichier
open index.html  # macOS
start index.html # Windows
firefox index.html # Linux
```

---

## 🌐 Déploiement sur GitHub Pages

### Option 1: GitHub Pages (GRATUIT)

1. ✅ Poussez votre code sur GitHub
2. ✅ Allez dans **Settings** → **Pages**
3. ✅ Sélectionnez `main` branch
4. ✅ Votre site est live! 🎉

**URL:** `https://votre-username.github.io/dazero-carousel/`

### Option 2: Vercel (GRATUIT et rapide)

1. ✅ Allez sur https://vercel.com
2. ✅ Connectez votre GitHub
3. ✅ Importez ce projet
4. ✅ Votre site est live en 30 secondes! 🚀

---

## 🎨 Personnalisation

### Changer les couleurs
Modifiez le fichier `css/style.css`:

```css
.carousel-button {
    background: rgba(255, 215, 0, 0.7); /* Doré */
}

.carousel-title {
    color: #ffd700; /* Doré */
}
```

### Changer la durée auto-rotation
Modifiez le fichier `js/carousel.js`:

```javascript
}, 5000); // 5000ms = 5 secondes
```

Changez `5000` en un autre nombre (en millisecondes)

### Ajouter plus d'images
1. Ajoutez une nouvelle div dans `index.html`:
```html
<div class="carousel-slide">
    <img src="images/image5.jpg" alt="Image 5">
</div>
```

2. Ajoutez un nouveau point:
```html
<span class="dot" onclick="currentSlide(4)"></span>
```

---

## 📱 Responsive Design

| Écran | Hauteur |
|-------|---------|
| Desktop | 500px |
| Mobile | 300px |

Modifiez les valeurs dans `css/style.css` si besoin.

---

## 🤝 Contribution

N'hésitez pas à suggérer des améliorations! 

Forkez le projet → Faites vos changements → Créez une Pull Request

---

## 📄 Licence

Libre d'utilisation pour DA ZERO Pizzeria.

---

## 📞 Contact

**DA ZERO Pizzeria**  
📍 798 Bd Curé-Labelle, Chomedey, Laval QC H7V 2V3  
📱 (514) 234-0313  
📧 contact@dazero.ca  
📸 [@dazero_pizzeria](https://www.instagram.com/dazero_pizzeria/)

---

## ⚡ Questions fréquentes

**Q: Comment changer le titre?**  
A: Modifiez le texte dans `index.html` ligne: `<div class="carousel-title">VOTRE TEXTE</div>`

**Q: Les images ne s'affichent pas?**  
A: Vérifiez que les images sont dans le dossier `images/` et nommées exactement: `image1.jpg`, `image2.jpg`, etc.

**Q: Comment déployer?**  
A: Utilisez GitHub Pages (gratuit) ou Vercel (encore plus rapide).

---

**Créé pour DA ZERO Pizzeria ❤️**
