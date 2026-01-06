---
title: Magnetic Simulation
pubDatetime: 2025-04-18
description: "Magnetic field and force derivations with supporting visuals."
type: "page"
---

### Magnetic Field (from the paper)

The magnetic field components in the x and z directions are given by:

$$
B_x = \frac{B_r R}{\pi} \left[ \alpha_+ P_1(k_+) - \alpha_- P_1(k_-) \right]
$$

$$
B_z = \frac{B_r R}{\pi (\rho + R)} \left[ \beta_+ P_2(k_+) - \beta_- P_2(k_-) \right]
$$

---

Where \( P_1(k) \) and \( P_2(k) \) are elliptic integrals of the first and second kind:

$$
P_1(k) = \mathcal{K} - \frac{2}{1 - k^2} \left( \mathcal{K} - \mathcal{E} \right)
$$

$$
P_2(k) = -\frac{\gamma}{1 - \gamma^2} \left( \mathcal{P} - \mathcal{K} \right) - \frac{1}{1 - \gamma^2} \left( \gamma^2 \mathcal{P} - \mathcal{K} \right)
$$

---

Additional relations:

$$
\xi_{\pm} = z \pm L
$$

$$
\alpha_{\pm} = \frac{1}{\sqrt{\xi_{\pm}^2 + (\rho + R)^2}}
$$

$$
\beta_{\pm} = \xi_{\pm} \alpha_{\pm}
$$

$$
\gamma = \frac{\rho - R}{\rho + R}
$$

$$
k_{\pm}^2 = \frac{\xi_{\pm}^2 + (\rho - R)^2}{\xi_{\pm}^2 + (\rho + R)^2}
$$

---

### Elliptic Integrals

$$
\mathcal{K} = \mathbb{K}\left( \sqrt{1 - k^2} \right) = \int_0^{\frac{\pi}{2}} \frac{d\theta}{\sqrt{1 - (1 - k^2) \sin^2 \theta}}
$$

$$
\mathcal{E} = \mathbb{E}\left( \sqrt{1 - k^2} \right) = \int_0^{\frac{\pi}{2}} d\theta \, \sqrt{1 - (1 - k^2) \sin^2 \theta}
$$

$$
\mathcal{P} = \Pi(1 - \gamma^2, \sqrt{1 - k^2}) = \int_0^{\frac{\pi}{2}} \frac{d\theta}{(1 - (1 - \gamma^2) \sin^2 \theta) \sqrt{1 - (1 - k^2) \sin^2 \theta}}
$$

---

### Magnetic Gradient (Mathematical Derivation)

The magnetic gradient in the x and z directions is derived as:

$$
(\nabla B)_x = \frac{B_x \frac{\partial B_x}{\partial x} + B_z \frac{\partial B_z}{\partial x}}{B}
$$

$$
(\nabla B)_z = \frac{B_x \frac{\partial B_x}{\partial z} + B_z \frac{\partial B_z}{\partial z}}{B}
$$

---

### Magnet Force (from the paper, Unverified, use with caution)

The force \( f(B) \) as a function of magnetic field strength is given by:

$$
f(B) = 
\begin{cases}
3 & B < \frac{M_{sp}}{3} \\
\frac{M_{sp}}{B} & B \geq \frac{M_{sp}}{3}
\end{cases}
$$

The magnetic force components in the x and z directions are:

$$
F_x = V_p f(B) B_x (\nabla B)_x
$$

$$
F_z = V_p f(B) B_z (\nabla B)_z
$$

---

### Visuals

![](https://s3.bmp.ovh/imgs/2025/04/18/badc5f992bf79ae1.png)

![](https://s3.bmp.ovh/imgs/2025/04/18/6b7e508c0aac37ab.png)

![](https://s3.bmp.ovh/imgs/2025/04/18/8a5a5179d2fde033.png)





