import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

# Define the system of differential equations
def system(state, t):
    altitude, airspeed = state
    d_altitude = airspeed
    d_airspeed = -altitude
    return [d_altitude, d_airspeed]

# Set the time grid
t = np.linspace(0, 10, 1000)

# Set the initial conditions for the trajectories
initial_conditions = [(-1, -0.5), (1, 0.5), (-1, 0.5), (1, -0.5)]

# Plot the trajectories
plt.figure(figsize=(8, 8))
for x0 in initial_conditions:
    states = odeint(system, x0, t)
    plt.plot(states[:, 0], states[:, 1])
plt.xlabel('Altitude')
plt.ylabel('Airspeed')
plt.title('Stable and Unstable Manifolds')
plt.grid()
plt.show()